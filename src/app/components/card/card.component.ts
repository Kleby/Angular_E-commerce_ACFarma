import { Component, Input, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  faTruckFast = faTruckFast;

  public productImgSrc = signal('');
  public productDescription = signal('');
  public productBeforePrice = signal('');
  public productPrice = signal('');
  public productStars = signal(0);

  @Input() set inputImgSrc(imgSrc: string){
    this.productImgSrc.set(imgSrc);
  }

  @Input({
    required: true
  }) set inputDescription(description: string){
    this.productDescription.set(description);
  }

  @Input({
    required: true
  }) set inputBefore(beforePrice: string){
    this.productBeforePrice.set(beforePrice);
  }

  @Input({required: true}) set inputPrice(price: string){
    this.productPrice.set(price);
  }

  @Input() set inputStars(star: number){
    this.productStars.set(star);
  }

}
