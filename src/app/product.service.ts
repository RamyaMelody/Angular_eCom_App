import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  prodList;
  constructor(private http : HttpClient) { }

  /* Insert the data using nodeapi */
  postProduct(data):Observable<any>{
    return this.http.post(`https://node-api-ecom.herokuapp.com/category`,data)

  }
  /* Display the data using nodeapi */
  listProduct():Observable<any>{
    return this.http.get(`https://node-api-ecom.herokuapp.com/view`)

  }
  /* Delete the data using nodeapi */
  deleteProduct(id):Observable<any>{
    return this.http.delete(`https://node-api-ecom.herokuapp.com/delete/`+id)

  }
  /* Update the data using nodeapi */
  updateProduct(data):Observable<any>{
    return this.http.put(`https://node-api-ecom.herokuapp.com/update/`+data.prod_id,data)
  }
  
  setItems(data){
    this.prodList=data;
  }

  viewItems()
  {
  return this.prodList;
  }
  category(data){
    return this.http.get('http://localhost:3000/viewcategory/'+data)
  }
}
