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

  updateRestaurant=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

  })
  constructor(private rest:AllcommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.rest.updateRestaurantNewData(this.router.snapshot.params.email).subscribe((result: { [x: string]: any; }) =>{
      this.updateRestaurant=new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        password: new FormControl(result['password']),
    })
  })
    }

  // updateRest(){}

  alertClose(){
    this.alert=false;
  }

}
