import { Component, OnInit } from '@angular/core';
import{PillService} from '../../services/pill.service';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.css']
})
export class PillComponent implements OnInit {
  pill:any;
  
  constructor(private _getPillService:PillService) { }
  
  ngOnInit() {
    this.pill=this._getPillService.getPill()
    .subscribe(res =>this.pill=res.pill);
  }
}
