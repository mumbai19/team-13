import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserService) { }

  user:any;
  response:any;
  passwordError = false;
  nonExistentUser = false;
  location:any;

  ngOnInit() {
    this.user = {
      "name" : '',
      "password" : undefined,
    };
  }

  login(){

    this.user.name=(<HTMLInputElement>document.getElementById('name')).value;
    this.user.password=(<HTMLInputElement>document.getElementById('password')).value;
    console.log(this.user);
    console.log(this.userservice.getUserId());
    this.userservice.loginUser(this.user).subscribe(data=>{
      console.log(data);
      this.response = data;
    });

    if(this.response.message === 0){
      this.userservice.setUserId(this.response.userid);
      this.userservice.setLocation(this.response.location);
    }
    else if(this.response.message === 1)
    {
      this.passwordError = true;
      this.nonExistentUser = false;
    }
    else
    {
      this.nonExistentUser = true;
      this.passwordError = false;
    }

  }


}
