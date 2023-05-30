import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    price: 0,
    img: ['']
  })
  constructor(private productSevice: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'))
      this.productSevice.getProductById(id).subscribe(product => {
        this.product = product
        this.productForm.patchValue({
          name: this.product.name,
          price: this.product.price,
          img: this.product.img,
        })
      })

    })
  }
  onHandleSubmit() {
    const product: IProduct = {
      id: this.product.id,
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      img: this.productForm.value.img || "",

    };
    this.productSevice.ProductUpdate(product).subscribe(() => {
      console.log('Sửa thanh công');
      this.router.navigate(["/admin/product"])
    })
  }
}
