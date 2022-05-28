import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { NewuserComponent } from './newuser/newuser.component';



const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login' , component: LoginComponent },
  {path: 'addnew' , component: AddcustomerComponent},
  {path: 'employee' , component: EmployeeComponent},
  {path: 'addEmp',component:AddemployeeComponent},
  {path: 'singup', component: NewuserComponent},
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
