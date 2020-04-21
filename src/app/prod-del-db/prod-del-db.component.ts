import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prod-del-db',
  templateUrl: './prod-del-db.component.html',
  styleUrls: ['./prod-del-db.component.css']
})
export class ProdDelDBComponent implements OnInit {
 
  delForm;

  constructor(private productService:ProductService, private router:Router) {
    this.delForm = new FormGroup({
      'prod_id': new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void { }

  delData() {
    if (this.delForm.valid) {
      console.log(this.delForm.value);
      for(let key in this.delForm.value){
        console.log ('key: ' +  key + ',  value: ' + this.delForm.value[key]);
        this.productService.deleteProduct(this.delForm.value[key]).subscribe((productData)=>{
          this.router.navigate(['/product/list'])
        })
      }
     
    }
  }

}