import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoffeeProduct } from '../models/coffee-product';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAllCoffeeProducts(): Observable<CoffeeProduct[]> {
    return this.http.get<any>(this.url);
  }
}
