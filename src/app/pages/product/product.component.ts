import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IPorduct } from '../../models/IPoduct.interface';
import { FreeShippingComponent } from '../../components/free-shipping/free-shipping.component';
import { ButtonBuyComponent } from '../../components/button-buy/button-buy.component';

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

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FreeShippingComponent, ButtonBuyComponent, FontAwesomeModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  public produto!: IPorduct | undefined;
  id: string | null = null;
  amount:number = 1;
  isFavorite: boolean = false;
  productForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProductService,
    private faIcons: FaIconLibrary,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.faIcons.addIcons(farHeart, fasHeart, fasCart);
    this.route.paramMap.subscribe((params) => (this.id = params.get('id')));
    this.getProduto();

    this.productForm = this.fb.group({
      amout: 1,
      price: 0,
      favorite: false,
      addCart: false
    })
  }

  getProduto() {
    if (this.id) {
      this.produto = this.produtoService.getProduct(parseInt(this.id));
    }
  }
  
  onHandleIncrease(): void{
    this.amount++;
  }
  onHandleDecrease(): void{
    this.amount = this.amount > 1 ? --this.amount: 1;
  }

  onToggleFavorite():void{
    this.isFavorite = !this.isFavorite;
  }
}
