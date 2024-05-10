import { ChangeDetectionStrategy, Component,OnChanges,OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from '@angular/router';
import { QuantityCartService } from '../../services/quantity-cart.service';
import { ProductCartService } from '../../services/product-cart.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, MenubarModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.responsive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnChanges{
  totalPriceInCart: number = 0;
  totalQuantity: number = 0;

  constructor(
    private quantityCartService:QuantityCartService,
    private productCartService: ProductCartService
  ){}

  ngOnInit(): void {
    this.totalQuantity = this.quantityCartService.getTotalInCart();
    this.totalPriceInCart = this.productCartService.getPriceTotal();    
  }

  ngOnChanges(): void {
      this.totalPriceInCart;
      this.totalQuantity
  }
}
