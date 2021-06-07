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

    // console.log(this.email);
    if(this.email=="vassuvdhasu@smail.com" && this.password=="mexico123"){
    this.router.navigate(['../listuser']);
  }
  else{
    alert("Please enter valid Email id & password")
  }
  }

}
