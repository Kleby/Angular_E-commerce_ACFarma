import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',   redirectTo: 'product', pathMatch: 'full', 
    },
    {
        path: 'cart', component: CartComponent, title: 'Carrinho de compras'
    },
    {
        path: 'product', component: HomeComponent, title: "ACFarme - Home"
    },
    {
        path: `product/:id`, component: ProductComponent, title: 'Produtos '
    },
    {
        path: 'contact', component: ContactComponent, title: "Nosso Contatos"
    },
    {
        path: '**', component: NotFoundComponent, title: "Página não encontrada"
    }
];
