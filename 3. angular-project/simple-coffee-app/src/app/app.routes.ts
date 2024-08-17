import { Routes } from '@angular/router';
import { CoffeeCatalogComponent } from './components/coffee-catalog/coffee-catalog.component';
import { CoffeeProductFormComponent } from './components/coffee-product-form/coffee-product-form.component';
import { CoffeeProductDetailComponent } from './components/coffee-product-detail/coffee-product-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: CoffeeCatalogComponent,
        title: 'Simple Coffee'
    },
    {
        path: 'newproduct',
        component: CoffeeProductFormComponent,
        title: 'Nuevo Producto'
    },
    {
        path: 'detail',
        component: CoffeeProductDetailComponent,
        title: 'Detalle del producto'
    }
];
