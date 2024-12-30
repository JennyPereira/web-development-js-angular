import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CoffeeProduct } from '../models/coffee-product';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  url = 'http://localhost:3000/products';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllCoffeeProducts(): Observable<CoffeeProduct[]> {
    return this.http.get<any>(this.url).pipe(catchError(this.handleError));
  }

  async getCoffeeProductsAvailible(): Promise<CoffeeProduct[]> {
    const data = await fetch(this.url)
      .then(response => response.json())
      .then(info => {
        const datos = info.filter((item: { available: boolean; }) => item.available == true);
        return datos;
      })
      .catch((e) => {
        console.log(e);
      });
    return await data ?? [];
  }

  saveNewProduct(newProduct: CoffeeProduct): Observable<CoffeeProduct> {
    return this.http.post<CoffeeProduct>(this.url, newProduct, this.httpOptions).pipe(catchError(this.handleError));
  }

  getCoffeeDetail(id: string): Observable<any> {
    //http://localhost:3000/products/1
    return this.http.get<CoffeeProduct>(`${this.url}/${id}`).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
