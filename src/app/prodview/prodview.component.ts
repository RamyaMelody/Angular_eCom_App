import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute} from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prodview',
  templateUrl: './prodview.component.html',
  styleUrls: ['./prodview.component.css']
})
export class ProdviewComponent implements OnInit {
  

   prodListservice; // from service 

  constructor(private activatedRoute:ActivatedRoute,private productservice:ProductService) { 
    let item = this.activatedRoute.snapshot.params.id;
    console.log(this.activatedRoute.snapshot.params.id);
  
    
  }
  
  ngOnInit(): void {

    this.prodListservice=this.productservice.viewItems();
  }
 

}
