import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.scss'],
  providers:[UserService]
})
export class BuyerHomeComponent implements OnInit {

  placeorder:any;
  constructor(private userservice:UserService) { }

  quotes:any;
  ngOnInit() {
    this.placeorder={
      "buyerid":0,
      "farmerid":0,
      "fishid":0,
      "quantity":0,
      "status":"pending",
      "sales":0
    };
    this.fetchFarmerQuotes("location");
  }

  changeLocation(newlocation){
    console.log(newlocation);
    this.fetchFarmerQuotes(newlocation);
  }

  fetchFarmerQuotes(location){
    this.quotes=[];
      this.userservice.getFarmerQuotes(location).subscribe((data)=>{
        this.quotes.push(data);
        console.log(this.quotes);
  });    
  }

  Buy(farmerid,productid,price){

    this.placeorder.buyerid=this.userservice.getUserId();
    this.placeorder.farmerid=farmerid;
    this.placeorder.productid=productid;
    this.placeorder.quantity=(<HTMLInputElement>document.getElementById(farmerid+productid)).value;
    this.placeorder.sales=this.placeorder.quantity*price;
    this.userservice.sendOrderToFarmer(this.placeorder).subscribe((data)=>{

      
    });   
  }


}
