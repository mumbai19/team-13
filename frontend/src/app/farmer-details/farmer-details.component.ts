import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-farmer-details',
  templateUrl: './farmer-details.component.html',
  styleUrls: ['./farmer-details.component.scss'],
  providers:[UserService]
})
export class FarmerDetailsComponent implements OnInit {
details:any;
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.details = {
      "fish_name":"",
      // "date":"",
      "fish_quantity":"",
      "area":"",
      "depth":"",
      "ph":"",

  };}
  sub_details(){

    this.details.fish_name=(<HTMLInputElement>document.getElementById('fish-name')).value;
    // this.details.date=(<HTMLInputElement>document.getElementById('date')).value;
    this.details.fish_quantity=(<HTMLInputElement>document.getElementById('fish_quantity')).value;
    this.details.area=(<HTMLInputElement>document.getElementById('area')).value;
    this.details.depth=(<HTMLInputElement>document.getElementById('depth')).value;
    this.details.ph=(<HTMLInputElement>document.getElementById('ph')).value;
    console.log(this.details);
    this.userservice.submit_farmer_details(this.details).subscribe(data=>{
      console.log(data);
    });
  }

}
