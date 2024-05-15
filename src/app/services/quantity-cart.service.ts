import { Injectable } from '@angular/core';
import { IProductCart } from '../models/IProductCart.interface';

@Injectable({
  providedIn: 'root',
})
export class QuantityCartService {
  itens: IProductCart[] = [];
  quantityInCart: number = 0;
  constructor() {
    this.updatedQuantityInCart();
  }

  updatedQuantityInCart(): void {
    const cartItems = localStorage.getItem('cart');
    if(!cartItems){
      console.log("não há itens no carrinho");
      return;
    }

    this.itens = JSON.parse(cartItems);
    let quantityInCart = 0;
    this.itens.map((item) => {
      quantityInCart += item.quantityProducts;      
    });
    this.setTotalInCart(quantityInCart);    
    // document.getElementById('quantityInBag')!.innerHTML = `${this.quantityInCart}`;           
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
