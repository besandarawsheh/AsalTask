import { Injectable, OnInit } from '@angular/core';
import{ HttpClientModule, HttpClient} from '@angular/common/http';
import {IBalance} from '../interface/balance'
import { Observable } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetBalanceService {
  //balance:number;
  balanceApiUrl:string="https://api.myjson.com/bins/19wu14";
  constructor(private _httpClient:HttpClient) { }
  getBalance():Observable<IBalance>{
    return this._httpClient.get<IBalance>(this.balanceApiUrl);
  }
}
