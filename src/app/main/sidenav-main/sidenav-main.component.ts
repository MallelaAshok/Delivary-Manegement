

import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

declare const $:any

@Component({
  selector: 'app-sidenav-main',
  templateUrl: './sidenav-main.component.html',
  styleUrls: ['./sidenav-main.component.scss']
})
export class SidenavMainComponent implements OnInit {
  admin:boolean=false;
  role:"user";
  navLinks: any ;
  userId:any;
  constructor(
    private service: ProjectService,
    private token: AuthenticationService,
    private router:Router,
    
  ) {}

  ngOnInit(): void {
  this.userId = JSON.parse(localStorage.getItem('userId'))
  if(this.userId){
    this.service.getUserDetails(this.userId.name).subscribe(x=>{ 
      debugger     
      if(x){
        this.role=x.role
        this.GetSideNavTabs()  
      }
    })
  }
  
  }
  GetSideNavTabs(){ 
    this.service.getDynamicTabs(this.role).subscribe(x=>{  
      this.navLinks=x
    })
  }
  navigate(name){
    this.router.navigate([`main/${name}`])
  }
}

