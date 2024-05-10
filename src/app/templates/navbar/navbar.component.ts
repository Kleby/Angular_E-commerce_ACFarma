import {
  Component,
  signal,
  WritableSignal,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faBasketShopping,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbar.responsive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnChanges{
  faBasketShopping: IconDefinition = faBasketShopping;
  
  public bagPrice: WritableSignal<number> = signal(0);
  @Input() set inputBagPrice(price: number){
    this.bagPrice.set(price);
  }
  
  public quantityInBag: WritableSignal<number> = signal(0);
  @Input() set inputQuantityInBag(quantity: number){
    this.quantityInBag.set(quantity);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.bagPrice.update((oldPrice: number) => oldPrice);
    this.quantityInBag.update((oldQuantity: number) => oldQuantity);
  }
}
