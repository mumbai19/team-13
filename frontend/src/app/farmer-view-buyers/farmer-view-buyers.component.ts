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
      this.userservice.VendorGetOrdersFarmers().subscribe((data)=>{
        this.order.push(data);
        console.log(data);
  });

console.log(this.order);
  }

  Accept(buyerid,farmerid,productid)
  {
    this.acceptorder={
      "farmerid":farmerid,
      "buyerid":buyerid,
      "productid":productid
    };
    this.userservice.FarmerAcceptOrder(this.acceptorder).subscribe(data=>{

    });
  }

  Reject(buyerid,farmerid,productid)
  {
    this.rejectorder={
      "farmerid":farmerid,
      "buyerid":buyerid,
      "productid":productid
    };
    this.userservice.FarmerRejectOrder(this.rejectorder).subscribe(data=>{

    });
  }
}

