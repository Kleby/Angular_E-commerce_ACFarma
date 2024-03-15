import { Component } from '@angular/core';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'app-free-shipping',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './free-shipping.component.html',
  styleUrl: './free-shipping.component.css'
})
export class FreeShippingComponent {
  truckIcon = faTruckFast;
}
