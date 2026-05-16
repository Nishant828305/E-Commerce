import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.api);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  addProduct(data: any): Observable<any> {
    return this.http.post(this.api, data);
  }

  updateProduct(id: string, data: any): Observable<any> {
    return this.http.put(`${this.api}/${id}`, data);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}