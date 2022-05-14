import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { NewuserComponent } from './newuser/newuser.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'nav' , component: NavComponent },
  {path: 'login' , component: LoginComponent },
  {path: 'dashboard' , component: DashboardModule},
  {path: 'addnew' , component: AddcustomerComponent},
  {path: 'employee' , component: EmployeeComponent},
  {path: 'addEmp',component:AddemployeeComponent},
  {path: 'singup', component: NewuserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
