import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products : IProduct[] = [];
        constructor(private ProductServie: ProductService){
          this.ProductServie.getProducts().subscribe(data =>{
            this.products = data
          }, error =>
            console.log(error.message))
        }
        removeItem(id: any){
      this.ProductServie.ProductDelete(id).subscribe(product =>{
        const newproduct = this.products.filter((product) =>product.id !=id);
        this.products = newproduct
        console.log("Xóa Thành Công", product);
        
      })
        
    }
}
