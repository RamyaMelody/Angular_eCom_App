import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-list1',
  templateUrl: './prod-list1.component.html',
  styleUrls: ['./prod-list1.component.css']
})
export class ProdList1Component implements OnInit {
  productWomenArray;

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {

    this.productservice.category("Women").subscribe((viewData) => {

      this.productWomenArray = viewData
      //console.log(this.productWomenArray);
    });
  }

}
