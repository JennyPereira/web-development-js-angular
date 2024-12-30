import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoffeeProduct } from '../../models/coffee-product';
import { CoffeeService } from '../../services/coffee.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-coffee-product-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './coffee-product-detail.component.html',
  styleUrl: './coffee-product-detail.component.css'
})
export class CoffeeProductDetailComponent implements OnInit {
  coffeeProduct$!: Observable<CoffeeProduct>;
  coffeeService = inject(CoffeeService);
  route: ActivatedRoute = inject(ActivatedRoute);
  coffeeProductId = '1';

  constructor() {
    this.coffeeProductId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.coffeeProduct$ = this.coffeeService.getCoffeeDetail(this.coffeeProductId);
  }



}
