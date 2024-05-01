import { Injectable } from '@angular/core';
import { IProductCart } from '../models/IProductCart.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  private itens: IProductCart[] = [];
  private priceTotal: number = 0;

  constructor() {
    this.getCart();
  }

  getCart(): IProductCart[] {
    //armazenar na local store
    const cartItems = localStorage.getItem('cart');
    if(!cartItems){
      return [];
    }
    this.itens = JSON.parse(cartItems);
    this.updatedPriceTotal();
    return this.itens;
  }

  setProductCart(product: IProductCart): void {
    
    let index = -1;
    for(let i in this.itens){
      if(this.itens[i].id === product.id) index = parseInt(i);
    }
    if(index > -1) this.itens[index].quantityProducts += 1
    else this.itens.push(product);
    
    //adicionar ao cart do local store como string
    localStorage.setItem('cart', JSON.stringify(this.itens));    
  }

  getQuantityProducts(id: number): number{
    // this.updatedPriceTotal();
    
    const product = this.itens.find(item => item.id === id);   
    return product?.quantityProducts || 1;
  }
  
  setQuantityProductsById(id: number, quantity: number){
    for (let i in this.itens) {
      if (this.itens[i].id === id) {
        this.itens[i].quantityProducts = quantity;                
      }
    }
    this.updatedPriceTotal();
    localStorage.setItem('cart', JSON.stringify(this.itens));
  }

  updatedPriceTotal(){
    let priceTotal = 0;
    for(let i of this.itens){
      priceTotal += (i.price * i.quantityProducts);      
    } 
    this.setPriceTotal(priceTotal) 
    document.getElementById('bagPriceTotal')!.innerHTML = "R$"+this.priceTotal.toFixed(2);     
  }
  
  setPriceTotal(newPrice:number):void{
    this.priceTotal = newPrice;
  }

  getPriceTotal():number{ 
    return Number(this.priceTotal.toFixed(2));
  }
}
