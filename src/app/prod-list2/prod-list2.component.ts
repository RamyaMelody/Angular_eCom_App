import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-list2',
  templateUrl: './prod-list2.component.html',
  styleUrls: ['./prod-list2.component.css']
})
export class ProdList2Component implements OnInit {
  productChildArray;

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {

    this.productservice.category("Children").subscribe((viewData) => {

      this.productChildArray = viewData
      //console.log(this.productChildArray);
    });
  }

}