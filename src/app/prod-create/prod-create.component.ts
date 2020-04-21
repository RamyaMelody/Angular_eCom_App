import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-prod-create',
  templateUrl: './prod-create.component.html',
  styleUrls: ['./prod-create.component.css']
})
export class ProdCreateComponent implements OnInit {
  prodForm;

  constructor(private productService:ProductService, private router:Router) {
    this.prodForm = new FormGroup({
      'category': new FormControl("", Validators.required),
      'prodName': new FormControl("", Validators.required),
      'price': new FormControl("", Validators.required),
      'description': new FormControl("", Validators.required),
      'qty': new FormControl("", Validators.required),
      'image': new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void { }

  sendData() {
    if (this.prodForm.valid) {
      console.log(this.prodForm.value);
       this.productService.postProduct(this.prodForm.value).subscribe((productData)=>{
         this.router.navigate(['/product/list'])
      })
    }
  }

}
