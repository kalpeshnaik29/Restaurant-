import { Component, OnInit } from '@angular/core';
import { AllcommonService } from '../allcommon.service'

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

   public collectiondata :any;

  constructor(private allcommon:AllcommonService) { 
    // this.allcommon.getUserList().subscribe((result)=>{
    //   this.collectiondata = result;
    //   console.log(this.collectiondata);
    // });
  }

  ngOnInit(): void {
      this.allcommon.getUserList().subscribe((result)=>{
      this.collectiondata = result;
      console.log(this.collectiondata);
    });
  }

}
