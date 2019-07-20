import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';



@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.scss']
})
export class VendorHomeComponent implements OnInit {
  product:any;

  order=[];
  constructor(private userservice:UserService) {
  }

  ngOnInit() {
    this.product={
      "user_id":0,
      "name":"",
      "quantity":"",
      "price":0
    };
    this.fetchOrder("");
  }

  fetchOrder(){
    this.order=[];
      this.userservice.VendorGetOrdersFarmers().subscribe((data)=>{
        this.order.push(data);
        console.log(data);
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

  Accept(farmername)
  {
    console.log(farmername);
    this.userservice.VendorAcceptOrder(farmername).subscribe(data=>{

    });
  }

  Reject(farmername)
  {
    console.log(farmername);
    this.userservice.VendorRejectOrder(farmername).subscribe(data=>{

    });
  }
}
