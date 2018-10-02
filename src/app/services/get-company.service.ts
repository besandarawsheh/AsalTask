import { Injectable } from '@angular/core';
import{ HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { ICompany } from '../interface/company';
@Injectable({
  providedIn: 'root'
})
export class GetCompanyService {
  getCompanyApiUrl:string="https://api.myjson.com/bins/zgw2w";
  
  constructor(private _httpClient:HttpClient) { }
  
  getCompany():Observable<ICompany[]>{
    return this._httpClient.get<ICompany[]>(this.getCompanyApiUrl);
  }
}
