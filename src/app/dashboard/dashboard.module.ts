import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewComponent } from './view/view.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
