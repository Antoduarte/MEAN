import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modules/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
 url ="http://localhost:4000/api/product/";
  
 getProduct():Observable<any>{
    return this.http.get(this.url);
  }
 
  deleteProduct(id:string):Observable<any>{
    return this.http.delete(this.url + id);
  }
  guardarProducto(producto:Product):Observable<any>{
    return this.http.post(this.url,producto);
  }
  obtenerProducto (id :string):Observable<any>{
    return this.http.get(this.url + id);
  }
  actualizarProducto(id:string, producto:Product):Observable<any>{
   return this.http.put(this.url+id, producto);
  }
}


