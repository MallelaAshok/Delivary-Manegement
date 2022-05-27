import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { DelivaryComponent } from './delivary/delivary.component';


import { MainComponent } from './main.component';

const routes: Routes = [{ path:'', component: MainComponent,
   children:[
       {path:'',component:DelivaryComponent},
       {path:'employee',component:EmployeeComponent},
       {path:'nav',component:DelivaryComponent},] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
