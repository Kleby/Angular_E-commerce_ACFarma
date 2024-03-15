import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { IPorduct } from '../../models/IPoduct.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
  export class HomeComponent implements OnInit {
    products: IPorduct[] = [];

    constructor(private productService: ProductService){}

    ngOnInit(){
      this.getAllProducts();
    }

    private getAllProducts():void{
      this.productService.getAllProducts().map(product => this.products.push(product));     
    }
}
