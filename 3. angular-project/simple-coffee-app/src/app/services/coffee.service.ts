import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAllCoffeeProducts() {
    const coffeeProducts = this.http.get<any>(this.url);
    console.log(coffeeProducts);
  }
}
