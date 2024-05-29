import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { IPorduct } from '../../models/IPoduct.interface';
import { ProductService } from '../../services/product.service';
import { QuantityCartService } from '../../services/quantity-cart.service';
import { ProductCartService } from '../../services/product-cart.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute } from '@angular/router';
import { CardLoadingComponent } from '../../components/card-loading/card-loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.responsive.css']
})
  export class HomeComponent implements OnInit {
    searchIcon = faMagnifyingGlass;

    searchProduct: string = "";
    searchCategory: string = "";
    products: IPorduct[] = [];

    constructor(
      private productService: ProductService,
      private productCartService: ProductCartService,
      private quantityCartService:QuantityCartService,
      private route: ActivatedRoute
    ){}

    ngOnInit(): void{
      const products = this.productService.getAllProducts();

      this.route.queryParamMap.subscribe(params =>{
        const paramDescription = params.get("description")?.toLocaleLowerCase();
        const paramCategory = params.get("category");
        if(paramDescription){          
          this.products = products.filter( p => p.description.toLowerCase().includes(paramDescription));
          return;
        }
        else if(paramCategory){          
          this.products = products.filter( p => p.category.includes(paramCategory))
          const radio = document.getElementById(paramCategory) as HTMLInputElement;
          radio.checked = true;
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
    
    onSearchCategory(event: Event){
      const target = event.target as HTMLInputElement;
      this.searchCategory = target.value || "";  
      target.form?.submit();      
    }

    productIsContains(productDescription : string){
      return productDescription.toLowerCase().match(this.searchProduct.toLowerCase());
    }
}
