import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-update-db',
  templateUrl: './prod-update-db.component.html',
  styleUrls: ['./prod-update-db.component.css']
})
export class ProdUpdateDbComponent implements OnInit {

  updateForm;
//  Update the form using product service
  constructor(private productService: ProductService, private router: Router) {
    this.updateForm = new FormGroup({
      'prod_id': new FormControl("", Validators.required),
      'category': new FormControl("", Validators.required),
      'prodName': new FormControl("", Validators.required),
      'price': new FormControl("", Validators.required),
      'description': new FormControl("", Validators.required),
      'qty': new FormControl("", Validators.required),
      'image': new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void { }

  updateData() {
    if (this.updateForm.valid) {
      console.log(this.updateForm.value.prod_id);

      this.productService.updateProduct(this.updateForm.value).subscribe((productData) => {
        this.router.navigate(['/product/list'])
      })


    }
  }

}