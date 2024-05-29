import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IPorduct } from '../../models/IPoduct.interface';
import { FreeShippingComponent } from '../../components/free-shipping/free-shipping.component';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faHeart as fasHeart,
  faCartShopping as fasCart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProductCartService } from '../../services/product-cart.service';
import { ButtonActionComponent } from '../../components/button-action/button-action.component';
import { ProductQuantityComponent } from '../../components/product-quantity/product-quantity.component';
import { QuantityCartService } from '../../services/quantity-cart.service';
import { MessageAddComponent } from '../../components/message-add/message-add.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    FreeShippingComponent,
    ButtonActionComponent,
    FontAwesomeModule,
    CommonModule,
    MatSlideToggleModule,
    ProductQuantityComponent,
    MessageAddComponent
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css', './product.responsive.component.css'],
})
export class ProductComponent implements OnInit {
  public produto!: IPorduct | undefined;
  id: string | null = null;
  amount: number = 1;
  isFavorite: boolean = false;
  productForm!: FormGroup;
  showMessage: boolean = false;

  QuantityInCart!: number;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProductService,
    private faIcons: FaIconLibrary,
    private fb: FormBuilder,
    private productCartService: ProductCartService,
    private quantityCartService: QuantityCartService
  ) {}

  ngOnInit(): void {
    this.faIcons.addIcons(farHeart, fasHeart, fasCart);
    this.route.paramMap.subscribe((params) => (this.id = params.get('id')));
    this.getProduto();

    this.productForm = this.fb.group({
      quantity: 1,
      price: 0,
      favorite: false,
      addCart: false,
    });
  }

  getProduto() {
      this.produto = this.produtoService.getProduct(Number(this.id));
  }

  onToggleValue(value:number){
    this.QuantityInCart = value ? value : 0; 
    
  }

  onToggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  addToCart(){
    const product = {
      ...this.produto!,
      quantityProducts: this.QuantityInCart
    }        
    this.productCartService?.setProductCart(product);
    this.updatedProductInCart();
    this.showMessage = true;
  }
  
  onShowMessage(isShowMessage: boolean){
    this.showMessage = isShowMessage;
  }

  updatedProductInCart(){ 
    this.quantityCartService.updatedQuantityInCart();
    this.productCartService.updatedPriceTotal();
  }

}
