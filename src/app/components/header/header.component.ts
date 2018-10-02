import { Component, OnInit } from '@angular/core';
import {GetBalanceService} from '../../services/get-balance.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  balance:any;
  constructor(private _getBalanceService:GetBalanceService) {
  }
  
  ngOnInit() {
    this.balance=this._getBalanceService.getBalance()
    .subscribe(res =>this.balance=res.balance);
  }
}
