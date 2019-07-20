import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register-farmer',
  templateUrl: './register-farmer.component.html',
  styleUrls: ['./register-farmer.component.scss'],
  providers:[UserService]
})
export class RegisterFarmerComponent implements OnInit {
  user:any;
  
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.user = {
      "name":"",
      "location":"",
      "contact":0,
      "password":"",
      "type":""
    };
  }

  register(){

    this.user.name=(<HTMLInputElement>document.getElementById('name')).value;
    this.user.location=(<HTMLInputElement>document.getElementById('location')).value;
    this.user.contact=(<HTMLInputElement>document.getElementById('contact')).value;
    this.user.password=(<HTMLInputElement>document.getElementById('password')).value;
    this.user.type=(<HTMLInputElement>document.getElementById('name')).value;
    this.user.type=(<HTMLInputElement>document.getElementById('type')).value;
    console.log(this.user);
    this.userservice.postUser(this.user).subscribe(data=>{
      console.log(data);
    });
  }

}
