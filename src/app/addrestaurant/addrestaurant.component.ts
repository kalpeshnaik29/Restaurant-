import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllcommonService } from '../allcommon.service'

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {

  alert:boolean = false;

  addRestaurant=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })

  constructor(private rest:AllcommonService) { }

  ngOnInit(): void {
  }
  creatRest(){
    // console.log(this.addRestaurant.value);
    this.rest.addRestaurantNew(this.addRestaurant.value).subscribe((result)=>{
      this.alert=true;
      this.addRestaurant.reset({});
      console.log("ADD Data from Service", result);
    })
  }
  alertClose(){
    this.alert=false;
  }

}
