import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coffee-product-form',
  standalone: true,
  imports: [],
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
  })

  ngOnInit(): void { }

  submitApplication(): void { }

}
