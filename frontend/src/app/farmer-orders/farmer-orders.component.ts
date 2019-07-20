import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-farmer-orders',
  templateUrl: './farmer-orders.component.html',
  styleUrls: ['./farmer-orders.component.scss']
})
export class FarmerOrdersComponent implements OnInit {
  selectedLocation;
  placeorder:any;
  location="";
  quotes=[];
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.placeorder={
      "vendorid":0,
      "farmerid":0,
      "productid":0,
      "quantity":0,
      "status":"pending",
      "sales":0
    };
    this.location=this.userservice.getLocation();
    this.getVendorQuotes(location);
  }

  changeLocation(newlocation){
    console.log(newlocation);
    this.getVendorQuotes(newlocation);
  }
  getVendorQuotes(location){
    this.quotes=[];
      this.userservice.getVendorQuotes(location).subscribe((data)=>{
        this.quotes.push(data);
        console.log(this.quotes);
  });    
  }

  Buy(userid,productid,price){

    this.placeorder.farmerid=this.userservice.getUserId();
    this.placeorder.vendorid=userid;
    this.placeorder.productid=productid;
    this.placeorder.quantity=(<HTMLInputElement>document.getElementById(userid+productid)).value;
    this.placeorder.sales=this.placeorder.quantity*price;
    this.userservice.sendOrderToFarmer(this.placeorder).subscribe((data)=>{

      
    });   
  }

  

}
