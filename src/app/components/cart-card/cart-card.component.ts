import {
  Component,
  Input,
  Output,
  signal,
  EventEmitter,
  WritableSignal,
  OnInit,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ProductQuantityComponent } from '../product-quantity/product-quantity.component';
import { IPorduct } from '../../models/IPoduct.interface';
import { CommonModule } from '@angular/common';
import { ProductCartService } from '../../services/product-cart.service';
import { QuantityCartService } from '../../services/quantity-cart.service';
import { MessageDeleteComponent } from '../message-delete/message-delete.component';
import { MessageAddComponent } from '../message-add/message-add.component';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ProductQuantityComponent,
    CommonModule,
    MessageDeleteComponent,
    MessageAddComponent,
  ],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css',
})
export class CartCardComponent implements OnInit {
  constructor(
    private quantityCartService: QuantityCartService,
    private productCartService: ProductCartService
  ) {}

  isOpenDialog: boolean = false;
  isDeleteItem: boolean = false;

  @Output() onChangeDeleteEmit: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() quantityProductEmit: EventEmitter<number> =
    new EventEmitter<number>();

  trashIcon = faTrashCan;
  productVoid = {
    id: 0,
    imgProduct: '',
    description: '',
    quantityInStock: 0,
    price: 0,
    priceBefore: 0,
    category: '',
    isSale: false
  };

  ngOnInit(): void {
    this.quantityCartService.updatedQuantityInCart();
  }

  public product: WritableSignal<IPorduct> = signal(this.productVoid);
  @Input() set inputProduct(product: IPorduct) {
    this.product.set(product);
  }

  onToggleValue(value: number) {
    this.updatedCart();
    this.quantityProductEmit.emit(value);
  }

  updatedCart() {
    this.quantityCartService.updatedQuantityInCart();
    this.productCartService.updatedPriceTotal();
  }

  openMessage() {
    this.isOpenDialog = true;   
  }
  
  onToggleDelete(id: number) {
    this.quantityCartService.deleteProductInCart(id);
    this.updatedCart();
    this.isOpenDialog = false;
    this.onChangeDeleteEmit.emit(true);
  }
  onCloseMessage(isClose: boolean) {
    this.isOpenDialog = isClose;
  }

}
