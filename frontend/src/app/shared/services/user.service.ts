import { Injectable } from "@angular/core";
import { Http, Response,Headers,RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
import { Observable,Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import 'rxjs/Rx'; //get everything from Rx
// import 'rxjs/add/operator/toPromise';
import { HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Injectable({ providedIn: 'root' })
export class UserService{
    userid = 4;
    location = "";

    setUserId = uid => this.userid = uid;

    getUserId = () => this.userid;
    openPackage=new EventEmitter<any>();

    constructor(private http:Http) {
    }

    //------------register user------------------------------------

    postUser(userDetails){
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS','Access-Control-Allow-Headers':'Content-Type, Authorization, Content-Length, X-Requested-With'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/team-13/jaljeev/public/regdata',userDetails, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }

    //------------login user------------------------------------

    loginUser(userDetails){
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS','Access-Control-Allow-Headers':'Content-Type, Authorization, Content-Length, X-Requested-With'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/team-13/jaljeev/public/loginuser',userDetails, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }
        //---------vendor adds products-------------------
    VendorAddProduct(newProduct){
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS','Access-Control-Allow-Headers':'Content-Type, Authorization, Content-Length, X-Requested-With'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/team-13/jaljeev/public/addproduct',newProduct, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }

     //------------get orders from farmers by vendors ------------------------------------

     VendorGetOrdersFarmers(){

        // return this.http.get('assets/data/vendorgetorders.json')
        return this.http.get('http://localhost:8080/team-13/jaljeev/public/')
        return this.http.get('assets/data/vendorgetorders.json')
        //return this.http.get('http://localhost:3000/api/PermitMetadata')

        .flatMap((data) =>data.json());
    }

     //---------vendor accept order-------------------
     VendorAcceptOrder(newProduct){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/Package',newProduct, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }

     //---------vendor reject order-------------------
     VendorRejectOrder(newProduct){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/Package',newProduct, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }
    //--------- farmer getting vendor quatations---------------
    getVendorQuotes(location){
        return this.http.get('assets/data/vendorgetorders.json')
        //return this.http.get('http://localhost:3000/api/PermitMetadata')
        .flatMap((data) =>data.json());
    }

    //----------buyer getting farmer quotations----------------
    getFarmerQuotes(location){
        return this.http.get('assets/data/vendorgetorders.json')
        //return this.http.get('http://localhost:3000/api/PermitMetadata')
        .flatMap((data) =>data.json());
    }

    //----------buyer placing orders----------------
    sendOrderToFarmer(orderDetails){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/Package',orderDetails, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }



    //----------------------Post provider generated package----------------
    postPackage(packageDetails){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/Package',packageDetails, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }

    //----------------------Post bought package---------------------------
    postBoughtPackage(bPackage){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/BoughtPackage',bPackage, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }

    //------------------complete stage------------------------------
    providerCompleteStage(bPackageId){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/CompleteStage',bPackageId, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }
     //------------------complete contingency------------------------------
     providerContingencyStage(bPackageId){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/CompleteContingency',bPackageId, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }
     //------------------patient verify stage------------------------------
     patientVerifyStage(bPackageId){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/VerifyStage',bPackageId, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }
    //------------------patient verify contingency------------------------------
    patientVerifyContingency(bPackageId){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/VerifyContingency',bPackageId, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }
    //------------------patient verify contingency------------------------------
    raiseContingency(bPackageId){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/RaiseContingency',bPackageId, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }
    //------------------patient verify contingency------------------------------
    expertValidateContingency(bPackageId){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/ValidateContingency',bPackageId, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }


    //---------for extracting and handling errors(post request)------------
    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    //------------register user------------------------------------

    submit_farmer_details(userDetails){
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS','Access-Control-Allow-Headers':'Content-Type, Authorization, Content-Length, X-Requested-With'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/team-13/jaljeev/public/regdata',userDetails, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }


}
