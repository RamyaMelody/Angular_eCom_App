import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  listDataDB;  
  

  constructor(private product:ProductService, private router:Router) {

    this.product.listProduct().subscribe((data) =>{
      this.listDataDB = data;
    })

    // this.product.deleteProduct(this.listDataDB).subscribe((deldata) =>{
    //   alert("deleted")      
    // })
    
   }

  ngOnInit(): void {
  }
  

  
}
