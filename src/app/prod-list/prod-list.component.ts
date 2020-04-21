import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  productMenArray;

  // productMenArray = [
  //   {
  //     id: 1,
  //     prodName: "Corator",
  //     prodPrice: "$50",
  //     image: "shoe_1.jpg"
  //   },
  //   {
  //     id: 2,
  //     prodName: "Tank Top",
  //     prodPrice: "$60",
  //     image: "cloth_1.jpg"
  //   },
  //   {
  //     id: 3,
  //     prodName: "Polo Shirt",
  //     prodPrice: "$40",
  //     image: "cloth_2.jpg"
  //   }

  // ];

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {


    this.productservice.category("Men").subscribe((viewData) => {

      this.productMenArray = viewData
      //console.log(this.productMenArray);
    });

  }

}
