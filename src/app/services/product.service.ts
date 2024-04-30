import { Injectable, OnInit } from '@angular/core';
import { IPorduct } from '../models/IPoduct.interface';
import { fakerDbProducts } from '../../assets/db/fakerDB';

@Injectable({
  providedIn: 'root',
  
})
export class ProductService{
  private product!: IPorduct | undefined;
  private products: IPorduct[] = []

  constructor() { }

  getAllProducts():IPorduct[]{    
    return fakerDbProducts;
  }

  getProduct(id: number):IPorduct| undefined {
    this.product = fakerDbProducts.find(product => product['id'] === id);       
    return this.product;
  }
}
