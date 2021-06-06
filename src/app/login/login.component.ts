import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllcommonService } from '../allcommon.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert:boolean = false;

  email!: string;
  password!: string;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email=="admin@domain.com" && this.password=="admin@123"){
    this.router.navigate(['../listuser']);
  }
  else{
    alert("Please enter valid Email id & password")
  }
  }

}
