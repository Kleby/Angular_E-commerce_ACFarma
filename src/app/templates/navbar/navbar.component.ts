import { Component, OnInit, Input, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faBasketShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  faBasketShopping:IconDefinition = faBasketShopping;

  public bagPrice:WritableSignal<string> = signal('0,00');

  @Input() set InputBagPrice(price: string){
    this.bagPrice.set(price);
  }

  ngOnInit(): void {
    
  }

}
