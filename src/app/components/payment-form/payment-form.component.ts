import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '../../../../node_modules/@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GetCompanyService } from '../../services/get-company.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  paymentForm:FormGroup;
  companies=[];
  constructor(private _httpClient:HttpClient,private _getCompanyService:GetCompanyService) { }
  status:any;
  ngOnInit() {
    this.paymentForm= new FormGroup(
      {
        name: new FormControl('',Validators.required),
        email:new FormControl('',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
        phone:new FormControl('',Validators.required)
      }
    );
  }
  onSubmit(paymentData){
  //   this._paymentService.postStatus()
  //   .subscribe(response => {
  //     console.log("POST call status", response);
  // }); 
  console.log(paymentData);
  //console.log(paymentData.name);

  var body = "name=" + paymentData.name + "&email=" + paymentData.email + "&phone=" + paymentData.phone;
  return this._httpClient.post("https://api.myjson.com/bins/gias0", body);
  //.subscribe(response =>alert(response));
  }

}
