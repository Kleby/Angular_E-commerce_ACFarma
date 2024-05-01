import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { IPorduct } from '../../models/IPoduct.interface';
import { ProductService } from '../../services/product.service';
import { QuantityCartService } from '../../services/quantity-cart.service';
import { ProductCartService } from '../../services/product-cart.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
  export class HomeComponent implements OnInit {
    searchIcon = faMagnifyingGlass;
    category: string = '';

    searchProduct: string = "";

    products: IPorduct[] = [];

    constructor(
      private productService: ProductService,
      private productCartService: ProductCartService,
      private quantityCartService:QuantityCartService,
      private route: ActivatedRoute
    ){}

    ngOnInit(){
      const products = this.productService.getAllProducts();
      this.route.queryParamMap.subscribe(params =>{
        const description = params.get("description")?.toLocaleLowerCase();
        if(description){          
          this.products = products.filter( p => p.description.toLowerCase().includes(description));
          return;
        }
        
        this.getAllProducts();
        // this.products = products;
      })
      this.productCartService.updatedPriceTotal();
      this.quantityCartService.getTotalInCart();

    }

    private getAllProducts():void{
      this.productService.getAllProducts().map(product => this.products.push(product));           
    }

    onSearchProduct(event: Event){
      const target = event.target as HTMLInputElement;
      this.searchProduct = target.value;
      
    }

    setCategory(event: Event){
      const target = event.target as HTMLInputElement;
      this.category = target?.value;
      console.log(this.category);
       
    }

    productIsContains(productDescription : string){
      return productDescription.toLowerCase().match(this.searchProduct.toLowerCase());
    }
}
