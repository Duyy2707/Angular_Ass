import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
    productForm = this.formBuilder.group({
      name: [''],
      price: 0,
      img: ['']
    })
      constructor(private productSevice: ProductService,
        private formBuilder: FormBuilder,
        private router: Router){}

        onHandleSubmit(){
        const product : IProduct = {
          name: this.productForm.value.name || "",
          price: this.productForm.value.price || 0,
          img: this.productForm.value.img || "",

        };
          this.productSevice.ProductAdd(product).subscribe(()=>{
            console.log('Thêm thanh công');
            this.router.navigate(["/admin/product"])
          })
        }
}
