import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';



@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.scss']
})
export class VendorHomeComponent implements OnInit {
  product:any;
  acceptorder:any;
  rejectorder:any;
  order=[];
  constructor(private userservice:UserService) {
  }

  ngOnInit() {
    this.product={
      "user_id":this.userservice.getUserId(),
      "name":"",
      "quantity":"",
      "price":0
    };
    this.fetchOrder();
  }

  fetchOrder(){
    this.order=[];
      this.userservice.VendorGetOrdersFarmers().subscribe((data)=>{
        this.order.push(data.$farmers);
        console.log(this.order);
  });

console.log(this.order);
  }

  addProducts()
  {
    this.product.userid=this.userservice.getUserId();
    this.product.name=(<HTMLInputElement>document.getElementById('name')).value;
    this.product.quantity=(<HTMLInputElement>document.getElementById('quantity')).value;
    this.product.price=(<HTMLInputElement>document.getElementById('price')).value;

    console.log(this.product);
    this.userservice.VendorAddProduct(this.product).subscribe(data=>{

    });
  }

  Accept(vendorid,farmerid,productid,quantity)
  {
    this.acceptorder={
      "farmerid":farmerid,
      "vendorid":vendorid,
      "productid":productid,
      "quantity":quantity
    };
    console.log(this.acceptorder);
    this.userservice.VendorAcceptOrder(this.acceptorder).subscribe(data=>{

    });
  }

  Reject(vendorid,farmerid,productid)
  {
    this.rejectorder={
      "farmerid":farmerid,
      "vendorid":vendorid,
      "productid":productid
    };
    this.userservice.VendorRejectOrder(this.rejectorder).subscribe(data=>{

    });
  }
}
