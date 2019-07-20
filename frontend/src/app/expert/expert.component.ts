import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss'],
  providers:[UserService]
})
export class ExpertComponent implements OnInit {
video_details:any;
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.video_details = {
      "category":"",
      "URL":"",
      "description":"",
      "location":"",


  };}
  upload_video(){

    this.video_details.fish_name=(<HTMLInputElement>document.getElementById('category')).value;
    this.video_details.date=(<HTMLInputElement>document.getElementById('location')).value;
    this.video_details.fish_quantity=(<HTMLInputElement>document.getElementById('URL')).value;
    this.video_details.area=(<HTMLInputElement>document.getElementById('description')).value;
    console.log(this.video_details);
    this.userservice.submit_farmer_details(this.video_details).subscribe(data=>{
      console.log(data);
    });
  }


}
