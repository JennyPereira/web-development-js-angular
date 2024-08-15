import { Component } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { CoffeeProduct } from '../../models/coffee-product';

@Component({
  selector: 'app-coffee-catalog',
  standalone: true,
  imports: [],
  templateUrl: './coffee-catalog.component.html',
  styleUrl: './coffee-catalog.component.css'
})
export class CoffeeCatalogComponent {
  coffeeProductList: CoffeeProduct[] = [];

  constructor(private coffeeService: CoffeeService) { }

  setCoffeeAll(): void {
    this.coffeeService.getAllCoffeeProducts()
      .subscribe(
        {
          next: res => this.coffeeProductList = res,
          error: err => console.log(),
        }
      );
  }
}
