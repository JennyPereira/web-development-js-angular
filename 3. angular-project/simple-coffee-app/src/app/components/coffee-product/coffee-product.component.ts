import { Component, Input } from '@angular/core';
import { CoffeeProduct } from '../../models/coffee-product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-product.component.html',
  styleUrl: './coffee-product.component.css'
})
export class CoffeeProductComponent {
  @Input() coffeeProduct!: CoffeeProduct;
}
