import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faBasketShopping,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { QuantityCartService } from '../../services/quantity-cart.service';
import { ProductCartService } from '../../services/product-cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbar.responsive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit{
  faBasketShopping: IconDefinition = faBasketShopping;

  totalPriceInBag: number = 0;
  totalQuantityInBag: number = 0;
    
  constructor(
    private quantityCartService:QuantityCartService,
    private productCartService: ProductCartService
  ){}

  ngOnInit(): void{
      this.totalPriceInBag = this.productCartService.getPriceTotal();
      this.totalQuantityInBag = this.quantityCartService.getTotalInCart();
  }

}
