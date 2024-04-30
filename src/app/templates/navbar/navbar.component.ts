import {
  Component,
  signal,
  WritableSignal,
  ChangeDetectionStrategy,
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
export class NavbarComponent {
  faBasketShopping: IconDefinition = faBasketShopping;

  // public bagPrice: WritableSignal<number> = signal(0);
  // public quantityInBag = signal(0);
}
