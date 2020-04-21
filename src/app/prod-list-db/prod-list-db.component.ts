import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-list-db',
  templateUrl: './prod-list-db.component.html',
  styleUrls: ['./prod-list-db.component.css']
})
export class ProdListDBComponent implements OnInit {
  listDataDB;  
  

  constructor(private product:ProductService, private router:Router) {

    this.product.listProduct().subscribe((data) =>{
      this.listDataDB = data;
    })

    
    
   }

  ngOnInit(): void {
  }
  
  createProduct(){
    this.router.navigate(['/product/create'])
  }
  
}
