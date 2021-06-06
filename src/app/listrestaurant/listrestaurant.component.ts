import { Component, OnInit } from '@angular/core';
import { AllcommonService } from '../allcommon.service'

@Component({
  selector: 'app-listrestaurant',
  templateUrl: './listrestaurant.component.html',
  styleUrls: ['./listrestaurant.component.css']
})
export class ListrestaurantComponent implements OnInit {

  public collectiondatar :any;

  constructor(private allcommon:AllcommonService) { }

  ngOnInit(): void {
    this.allcommon.getRestaurantList().subscribe((result)=>{
      this.collectiondatar= result;
      console.log(this.collectiondatar);
    });
  }

}
