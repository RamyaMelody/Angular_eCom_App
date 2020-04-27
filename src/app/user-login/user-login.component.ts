import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm;


  constructor(private productService: ProductService, private router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void { }

  loginData() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.productService.loginPost(this.loginForm.value).subscribe((logData) => {
        var user_status = logData.message;
        console.log(user_status)
        if (user_status == "Incorrect password") {
          alert(user_status)
        }
        else if (user_status == "success") {
          this.router.navigate(['shop'])
        }
        else {
          alert(user_status)
        }
      })
    }

  }

}
