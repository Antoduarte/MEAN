import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/modules/product.module';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private _products:ProductsService,
               private tostr:ToastrService
               ) { }
   
  products:Product[] = [];
  buscar:boolean= false;
  Fill = "";
  ngOnInit(): void {
    this.getproducts();
   
  }

  getproducts(){
    this._products.getProduct().subscribe( data =>{
this.products = data;
    });
 }

 eliminar(id:any){
   this._products.deleteProduct(id).subscribe(data =>{
          this.tostr.info('Producto eliminado','eliminar');
          this.getproducts()
     }, error =>{
       console.log(error);
     } );
  }
}
