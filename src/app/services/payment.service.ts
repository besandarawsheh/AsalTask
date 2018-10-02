import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IPayment } from '../interface/payment';
import { Observable } from '../../../node_modules/rxjs';
//import { } from '../components/payment-form';
@Injectable({
  providedIn: 'root'
})
export class PaymentService{
  
  paymentApiUrl:string="https://api.myjson.com/bins/7injk";
  constructor(private _httpClient:HttpClient) { }
  postStatus():Observable<IPayment>{
  
    return this._httpClient.post<IPayment>(this.paymentApiUrl,{
      state:"success"
  });
}
}
