import { Component, OnInit } from '@angular/core';
import{GetCompanyService} from '../../services/get-company.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies=[];
  
  constructor(private _getCompanyService:GetCompanyService) { }
  
  ngOnInit() {
    this._getCompanyService.getCompany()
    .subscribe(data =>this.companies=data);
  }
}
