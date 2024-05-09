import { Component, EventEmitter, Input, OnChanges, OnInit, Output, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { ProductCartService } from '../../services/product-cart.service';
import { QuantityCartService } from '../../services/quantity-cart.service';

@Component({
  selector: 'app-product-quantity',
  standalone: true,
  imports: [],
  templateUrl: './product-quantity.component.html',
  styleUrl: './product-quantity.component.css'
})
export class ProductQuantityComponent implements OnInit{

  constructor(private productCartService : ProductCartService,
    private quantityCartService: QuantityCartService){}

  ngOnInit(): void {
    this.quantity.set(this.getQuantity(this.id()));          
  }

  public id: WritableSignal<number> = signal(0);
  @Input() set inputId(id: number){
    this.id.set(id);
  }
  
  public isShowText = signal(false);
  @Input() set inputShowText(ishowText: boolean){
    this.isShowText.set(ishowText);
  }
  
  public quantity:WritableSignal<number> = signal(1);
  @Output() quantityOuput: EventEmitter<number> = new EventEmitter<number>();

  onHandleIncrease(): void {
    this.quantity.update((oldValue:number) => ++oldValue);
    this.quantityOuput.emit(this.quantity());
  }
  onHandleDecrease(): void {
    if(this.quantity() >= 1){
      this.quantity.update((oldValue:number) => --oldValue);
      this.quantityOuput.emit(this.quantity())
    }
  }
  
  getQuantity(id: number):number{
    return this.productCartService.getQuantityProducts(id);
  }
}
