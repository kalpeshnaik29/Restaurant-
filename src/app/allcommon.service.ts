import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllcommonService {

  URLuser ="https://bhojanalay.herokuapp.com/users";
  URLregister="https://bhojanalay.herokuapp.com/users/register"

  URLrestaurant = "https://bhojanalay.herokuapp.com/restaurant"
  URLnewrestaurant = "https://bhojanalay.herokuapp.com/restaurant"
  URLupdaterestaurant = "https://bhojanalay.herokuapp.com/restaurant/6050bee65c82680007bf407a"
  URLdeleterestaurant = "https://bhojanalay.herokuapp.com/restaurant/6050bee65c82680007bf407a"

  constructor(private _http:HttpClient) { }
    getUserList(){
      console.log("working getUserList");
      return this._http.get(this.URLuser);
  }
  getRestaurantList(){
    // console.log("working getUserList");
    return this._http.get(this.URLrestaurant);
}

addRestaurantNew(data: any){
  return this._http.post(this.URLnewrestaurant, data);
}

currentRestaurantNewData(id:any){
  return this._http.get(`${this.URLupdaterestaurant}/${id}`);
}

updateRestaurantLatestData(id: any,data: any){
  return this._http.put(`${this.URLupdaterestaurant}/${id}`,data);
}

deleteRestaurantData(id: any,data: any){
  return this._http.put(`${this.URLdeleterestaurant}/${id}`,data);
}

addUser(data:any){
  console.log(data);
  console.log(this.URLregister);
  return this._http.post(this.URLregister, data);
}

}

