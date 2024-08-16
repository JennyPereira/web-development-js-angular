import { Component } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { CoffeeProduct } from '../../models/coffee-product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-catalog.component.html',
  styleUrl: './coffee-catalog.component.css'
})
export class CoffeeCatalogComponent {
  coffeeProductList: CoffeeProduct[] = [];

  constructor(private coffeeService: CoffeeService) {
    console.log(this.coffeeProductList);
  }

  setCoffeeAll(): void {
    this.coffeeService.getAllCoffeeProducts()
      .subscribe(
        {
          next: res => console.log(res),
          error: err => console.log(),
        }
      );
  }
}
