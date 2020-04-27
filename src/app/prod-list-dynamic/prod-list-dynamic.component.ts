import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-list-dynamic',
  templateUrl: './prod-list-dynamic.component.html',
  styleUrls: ['./prod-list-dynamic.component.css']
})
export class ProdListDynamicComponent implements OnInit {

  @Input() productList;

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    //console.log(this.productList)
  }

  setItems() {
    this.productservice.setItems(this.productList);
  }

}
