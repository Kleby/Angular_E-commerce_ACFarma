import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FreeShippingComponent } from '../free-shipping/free-shipping.component';
import { CommonModule } from '@angular/common';
import { ButtonActionComponent } from '../button-action/button-action.component';
import { CardLoadingComponent } from '../card-loading/card-loading.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    FontAwesomeModule, 
    RouterLink, 
    ButtonActionComponent, 
    FreeShippingComponent, 
    CommonModule,
    CardLoadingComponent
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.component.responsive.css']
})
export class CardComponent implements OnInit{
  faTruckFast = faTruckFast;

  paramUrl: number | null = null;
  // #route = inject(ActivatedRoute);

  ngOnInit():void{    
    // console.log(this.#route.snapshot.params['name']);// primeira forma de regatar os paramentrs
    // this.#route.params.subscribe(res => console.log(res['name'])); // segunda forma de resgatar os paramentros  
    
    // console.log(this.#route.snapshot.params['id']); // se em routras o paramentros fosse :id 
    
  }


  public productId = signal(0)
  public productImgSrc = signal('');
  public productDescription = signal('');
  public productBeforePrice = signal(0);
  public productPrice = signal(0);
  public productStars = signal(0);
  

  @Input() set inputId(id: number){
    this.productId.set(id);
    this.paramUrl = id;
  }

  @Input() set inputImgSrc(imgSrc: string){
    this.productImgSrc.set(imgSrc);
  }

  @Input({
    required: true
  }) set inputDescription(description: string){
    this.productDescription.set(description);
    // this.paramName = description.replace(/\s/g, '-').toLowerCase();//enviar so o nome        
  }

  @Input({
    required: true
  }) set inputBefore(beforePrice: number){
    this.productBeforePrice.set(beforePrice);
  }

  @Input({required: true}) set inputPrice(price: number){
    this.productPrice.set(price);
  }

  @Input() set inputStars(star: number){
    this.productStars.set(star);
  }

  public category = signal('');
  @Input() set inputCategory(category: string){
    this.category.set(category);
  }

  public isSale = signal(false);
  @Input() set inputIsSale(isSale: boolean){
    this.isSale.set(isSale);
  }

}
