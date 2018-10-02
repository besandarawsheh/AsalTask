import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GetBalanceService } from './services/get-balance.service';
import { GetCompanyService } from './services/get-company.service';
import { PillService} from './services/pill.service';
import { HeaderComponent } from './components/header/header.component';
import { CompanyComponent } from './components/company/company.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { RouterModule,Routes } from '@angular/router';
import { PillComponent } from './components/pill/pill.component';
const appRoutes:Routes=[
{ path:'payment', component:PaymentFormComponent},
{ path:'home',component:CompanyComponent},
{ path:'',redirectTo:'/home',pathMatch:'full'},
{ path:'**',redirectTo:'/home',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompanyComponent,
    PaymentFormComponent,
    PillComponent
  ], 
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetBalanceService,
    GetCompanyService,
    PillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
