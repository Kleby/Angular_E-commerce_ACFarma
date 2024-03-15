import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPorduct } from '../models/IPoduct.interface';
import { fakerDbProducts } from '../../assets/db/fakerDB';

@Injectable({
  providedIn: 'root',
  
})
export class ProductService implements OnInit{
  private product!: IPorduct | undefined;
  private products: IPorduct[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(){
    // console.log(this.fakeURL)
    
  }

  getAllProducts():IPorduct[]{
    // return this.products = products.map(product => this.products.push(product));
    return this.products = fakerDbProducts;
  }

  getProduct(id: number):IPorduct | undefined{
    
    this.product = fakerDbProducts.find(product => product['id'] === id);       
    return this.product;
  }
}
