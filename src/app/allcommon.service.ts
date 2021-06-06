import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllcommonService {

  URLuser ="https://akup96.deta.dev/users";
  URLrestaurant = "https://akup96.deta.dev/restaurant";
  URLnewrestaurant = "https://akup96.deta.dev/restaurant";
  URLupdaterestaurant = "https://akup96.deta.dev/restaurant/6050bee65c82680007bf407a";

  constructor(private http:HttpClient) { }
    getUserList(){
      // console.log("working getUserList");
      return this.http.get(this.URLuser);
  }
  getRestaurantList(){
    // console.log("working getUserList");
    return this.http.get(this.URLrestaurant);
}

addRestaurantNew(data: any){
  return this.http.post(this.URLnewrestaurant, data);
}

updateRestaurantNewData(id:any){
  return this.http.get(`${this.URLupdaterestaurant}/${id}`);
}

updateRestaurantLatestData(id: any,data: any){
  return this.http.put(`${this.URLupdaterestaurant}/${id}`,data);
}

}

