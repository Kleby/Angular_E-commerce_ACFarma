import { Injectable } from '@angular/core';
import { IProductCart } from '../models/IProductCart.interface';

@Injectable({
  providedIn: 'root',
})
export class QuantityCartService {
  itens: IProductCart[] = [];
  quantityInCart: number = 1;
  constructor() {
    this.updatedQuantityInCart();
  }

  updatedQuantityInCart(): void {
    this.itens = JSON.parse(localStorage.getItem('cart') || '');
    
    let quantityInCart = 0;
    this.itens.map((item) => {
      quantityInCart += item.quantityProducts;      
    });
    this.setTotalInCart(quantityInCart);
    document.getElementById('quantityInBag')!.innerHTML = `${this.quantityInCart}`;           
  }
  
  setTotalInCart(value: number): void {
    this.quantityInCart = value;
  }
  getTotalInCart(): number {
    return this.quantityInCart;
  }

  clearCart(): void {
    this.itens = [];
    localStorage.clear();
  }

  deleteProductInCart(id: number){
    this.itens = JSON.parse(localStorage.getItem('cart') || '');  
    this.itens = this.itens.filter(item => item.id !== id)  
    localStorage.setItem('cart', JSON.stringify(this.itens));
    this.updatedQuantityInCart();
  }
}
