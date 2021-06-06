import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllcommonService } from '../allcommon.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updaterestaurant',
  templateUrl: './updaterestaurant.component.html',
  styleUrls: ['./updaterestaurant.component.css']
})
export class UpdaterestaurantComponent implements OnInit {


  alert:boolean = false;

  editRestaurant=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),

  })
  constructor(private rest:AllcommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.rest.updateRestaurantNewData(this.router.snapshot.params.id).subscribe((result) =>{
      this.editRestaurant=new FormGroup({
        name: new FormControl(['name']),
        email: new FormControl(['email']),
        password: new FormControl(['address']),
    })
  })
    }

   updateRestaurantLatestData(){
     this.rest.updateRestaurantLatestData(this.router.snapshot.params.id,this.editRestaurant.value).subscribe((result) =>{
       console.log(result,"Updated Succesfully...");
       this.alert=true;
     })
   }

  alertClose(){
    this.alert=false;
  }

}
