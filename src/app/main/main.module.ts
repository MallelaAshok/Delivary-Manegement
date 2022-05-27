import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SidenavMainComponent } from './sidenav-main/sidenav-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DelivaryComponent } from './delivary/delivary.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    SidenavMainComponent,
    DelivaryComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule
    
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[]
})
export class MainModule { }
