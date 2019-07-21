import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-farmer-view-buyers',
  templateUrl: './farmer-view-buyers.component.html',
  styleUrls: ['./farmer-view-buyers.component.scss']
})
export class FarmerViewBuyersComponent implements OnInit {
  product:any;

  order=[];

  acceptorder:any;
  rejectorder:any;
  constructor(private userservice:UserService) {
  }

  ngOnInit() {
    this.fetchOrder();
  }

  fetchOrder(){
    this.order=[];
      this.userservice.Farmergetorders().subscribe((data)=>{
        console.log(data);
        this.order.push(data.buyers[0]);
        console.log(data);
  });

console.log(this.order);
  }

  Accept(buyerid,farmerid,productid,quantity)
  {
    this.acceptorder={
      "farmerid":farmerid,
      "buyerid":buyerid,
      "fishid":productid,
      "quantity":quantity
    };
    console.log(this.acceptorder);
    this.userservice.FarmerAcceptOrder(this.acceptorder).subscribe(data=>{

    });
  }

  Reject(buyerid,farmerid,productid)
  {
    this.rejectorder={
      "farmerid":farmerid,
      "buyerid":buyerid,
      "fishid":productid
    };
    this.userservice.FarmerRejectOrder(this.rejectorder).subscribe(data=>{

    });
  }
}

