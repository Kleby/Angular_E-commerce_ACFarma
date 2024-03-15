import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {
        path: '',   component: HomeComponent, pathMatch: 'full', title: "Farmacia do Devedor - Home"
    },
    {
        path: 'cart', component: CartComponent, title: 'Carrinho de compras'
    },
    {
        path: `:id`, component: ProductComponent, title: 'Produtos '
    },
    {
        path: '**', component: NotFoundComponent, title: "Página não encontrada"
    }
];
