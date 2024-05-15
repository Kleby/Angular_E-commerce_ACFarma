import { Component, EventEmitter, OnInit, WritableSignal, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBasketShopping,
  faSackDollar,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonActionComponent } from '../../components/button-action/button-action.component';
import { CartCardComponent } from '../../components/cart-card/cart-card.component';
import { ProductCartService } from '../../services/product-cart.service';
import { IPorduct } from '../../models/IPoduct.interface';
import { QuantityCartService } from '../../services/quantity-cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FontAwesomeModule, ButtonActionComponent, CartCardComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', './cart.component.responsive.css'],
})
export class CartComponent implements OnInit {
  products: IPorduct[] = [];
  
  quantity: WritableSignal<number> = signal(0);
  priceTotal: WritableSignal<number> = signal(0);

  icons = {
    basketShooping: faBasketShopping,
    dollar: faSackDollar,
  };

  constructor(
    private productCartService: ProductCartService,
    private quantityCartService :QuantityCartService
    ) {}

  ngOnInit(): void {
    this.getCart();
    this.priceTotal.set(this.productCartService.getPriceTotal());
    this.quantity.set(this.quantityCartService.getTotalInCart());

  }
  
  getCart(){
    this.products = this.productCartService.getCart(); 
    this.updatedPriceTotal();
    this.updatedQuantityTotal();
  }
  
  getQuantity(value: number, id: number) {
    this.productCartService.setQuantityProductsById(id, value);
    this.quantityCartService.updatedQuantityInCart();
    this.quantity.update(() => this.quantityCartService.getTotalInCart());
    this.updatedPriceTotal();
  }
  
  updatedPriceTotal(){
    this.priceTotal.update(() => this.productCartService.getPriceTotal())
    this.productCartService.updatedPriceTotal();    
  }

  updatedQuantityTotal(){
    this.quantity.update(() => this.quantityCartService.getTotalInCart())
  }
}
