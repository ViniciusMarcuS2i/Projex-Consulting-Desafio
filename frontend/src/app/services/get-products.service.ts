import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../types/products.interface';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  readonly apiUrl = 'http://localhost:8000/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(this.apiUrl);
  }
}
