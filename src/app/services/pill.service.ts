import { Injectable } from '@angular/core';
import{ HttpClientModule, HttpClient} from '@angular/common/http';
import {IPill} from '../interface/pill'
import { Observable } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class PillService {
  pillApiUrl:string="https://api.myjson.com/bins/n0cpc";
  constructor(private _httpClient:HttpClient) { }
  getPill():Observable<IPill>{
    return this._httpClient.get<IPill>(this.pillApiUrl);
  }
}
