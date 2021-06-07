import { Component, OnInit } from '@angular/core';
import { AllcommonService } from '../allcommon.service'

@Component({
  selector: 'app-listrestaurant',
  templateUrl: './listrestaurant.component.html',
  styleUrls: ['./listrestaurant.component.css']
})
export class ListrestaurantComponent implements OnInit {

  alert:boolean = false;

  public collectiondatarest :any=[];
  data: any;

  constructor(private allcommon:AllcommonService) { }

  ngOnInit(): void {
    this.allcommon.getRestaurantList().subscribe((result)=>{
      this.collectiondatarest= result;
      console.log(this.collectiondatarest);
    });
  }


  deletRestuarent(restaurant : any){
    const index = this.collectiondatarest.indexOf(restaurant);
    const result=this.collectiondatarest.splice(index, 1);
    this.alert=true;
    console.log("Data is deleted....", result);
}

  alertClose(){
    this.alert=false;
  }

}
