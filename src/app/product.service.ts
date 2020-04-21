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
    return this.http.post(`http://localhost:3000/category`,data)

  }
  /* Display the data using nodeapi */
  listProduct():Observable<any>{
    return this.http.get(`http://localhost:3000/view`)

  }
  /* Delete the data using nodeapi */
  deleteProduct(id):Observable<any>{
    return this.http.delete(`http://localhost:3000/delete/`+id)

  }
  /* Update the data using nodeapi */
  updateProduct(data):Observable<any>{
    return this.http.put(`http://localhost:3000/update/`+data.prod_id,data)
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
