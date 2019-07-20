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
      
      "userid":this.userservice.getUserId(),
      "quantity":0,
      "area":0,
      "depth":0,
      "ph":0,

  };}
  sub_details(){
console.log("hi");
   
    this.details.fish_quantity=(<HTMLInputElement>document.getElementById('fish-quantity')).value;
    this.details.area=(<HTMLInputElement>document.getElementById('area')).value;
    this.details.depth=(<HTMLInputElement>document.getElementById('depth')).value;
    this.details.ph=(<HTMLInputElement>document.getElementById('ph')).value;
    console.log(this.details);
    this.userservice.submit_farmer_details(this.details).subscribe(data=>{
      console.log(data);
    });
  }

}
