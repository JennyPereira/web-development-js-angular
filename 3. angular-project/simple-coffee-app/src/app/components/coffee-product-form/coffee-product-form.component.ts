import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CoffeeProduct } from '../../models/coffee-product';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-coffee-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './coffee-product-form.component.html',
  styleUrl: './coffee-product-form.component.css'
})
export class CoffeeProductFormComponent implements OnInit {
  applyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    rating: new FormControl(0),
    votes: new FormControl(0),
    popular: new FormControl(false),
    available: new FormControl(false),
  });
  newProduct!: CoffeeProduct;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void { }

  submitApplication(): void {
    if (this.applyForm.valid) {
      this.newProduct = new CoffeeProduct(this.applyForm.value as CoffeeProduct);
      this.coffeeService.saveNewProduct(this.newProduct)
        .subscribe(
          {
            next: () => console.log('Nuevo producto guardado'),
            error: err => console.log('error')
          }
        );
    }
  }

}
