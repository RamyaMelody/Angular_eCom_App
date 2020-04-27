import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm;

  constructor(private productService:ProductService, private router:Router) {
    this.regForm = new FormGroup({
      'name': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'contact': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void { }

  regData(){
    if (this.regForm.valid) {
      console.log(this.regForm.value);
       this.productService.regDataPost(this.regForm.value).subscribe((productData)=>{
         this.router.navigate(['login'])
      })
    }

  }

}
