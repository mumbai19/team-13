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
      "status":"pending"
    };
  }

  fetchFarmerQuotes(){
    this.quotes=[];
      this.userservice.VendorGetOrdersFarmers().subscribe((data)=>{
        this.quotes.push(data);
        console.log(this.quotes);
  });    
  }

  Buy(farmerid,fishid){

    // this.placeorder.buyerid=this.userservice.
    this.placeorder.farmerid=farmerid;
    this.placeorder.productid=fishid;
    this.placeorder.quantity=(<HTMLInputElement>document.getElementById(farmerid+fishid)).value;
    this.userservice.sendOrderToFarmer(this.placeorder).subscribe((data)=>{

    });   
  }


}
