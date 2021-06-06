import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllcommonService } from '../allcommon.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean = false;

  addUser=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private rest:AllcommonService) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.addUser.value);
    this.rest.addUser(this.addUser.value).subscribe((result)=>{
      console.log(result,"Register Succesfully...");
      this.alert=true;
    })
  }
  alertClose(){
    this.alert=false;
  }

}
