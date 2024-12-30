import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { CoffeeProduct } from '../../models/coffee-product';
import { CommonModule } from '@angular/common';
import { CoffeeProductComponent } from '../coffee-product/coffee-product.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coffee-catalog',
  standalone: true,
  imports: [CommonModule, CoffeeProductComponent, RouterModule],
  templateUrl: './coffee-catalog.component.html',
  styleUrl: './coffee-catalog.component.css'
})
export class CoffeeCatalogComponent implements OnInit {
  coffeeProductList: CoffeeProduct[] = [];
  stateEdit: boolean = false;

  constructor(private coffeeService: CoffeeService) {
  }

  ngOnInit(): void {
    this.setCoffeeAll();
  }

  setCoffeeAll(): void {
    this.coffeeService.getAllCoffeeProducts()
      .subscribe(
        {
          next: res => this.coffeeProductList = res,
          error: err => console.log(),
        }
      );
  }

  setCoffeeAvailable(): void {
    this.coffeeService.getCoffeeProductsAvailible().then((coffeeProductList: CoffeeProduct[]) => {
      this.coffeeProductList = coffeeProductList;
    })
  }

  onProductDeleted(coffeeProduct: CoffeeProduct): void {
    this.coffeeProductList = this.coffeeProductList.filter(product => product.id !== coffeeProduct.id);
  }

  enableToDelete(): void {
    this.stateEdit = !this.stateEdit;
  }
}
