import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {
  btnSaveUpdate: string = "Save";
  logindata: any;
  dobfc = new FormControl('');
  fnfc = new FormControl('');
  lnfc = new FormControl('');
  mailfc = new FormControl('');
  phonefc = new FormControl('');
  usnmfc = new FormControl('');
  pswrdfc = new FormControl('');
  cnfrmpswrdfc = new FormControl('');
  timelimit: any;
  currentdate = new Date();
  admin: any;

  constructor(
    private service: ProjectService,
    private token: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.service.userdetails$.subscribe(
      x => {
        if(x !== null){
          this.logindata = x
          if(this.validLogin()){
            if(this.logindata.role == "admin"){
              this.admin = true;
            }
            else{
              this.admin = false
            }
          }
        }
      }
    )
  }

  validLogin(){
    this.timelimit=this.currentdate.getMinutes()-this.logindata.loginTime.getMinutes()
    if(this.timelimit>3){
       return true
    }
    else{
      return true
    }
   
  }

  SaveUser(){
    const obj = Object.assign({});
    obj.dob = this.dobfc.value;
    obj.firstname = this.fnfc.value;
    obj.lastname = this.lnfc.value;
    obj.mail = this.mailfc.value;
    obj.phone = this.phonefc.value;
    //obj.username = this.usnmfc.value;
    //obj.password = this.pswrdfc.value;
    obj.routes={};
    obj.role="admin";
    //obj.cnfrmpasswrd = this.cnfrmpswrdfc.value;
    this.service.SaveDeliveryBoy(obj).subscribe(x=>{
      if(x!=null){
        this.service.SaveUpdateUser(x,this.usnmfc.value,this.pswrdfc.value).subscribe()
      }

    })
  }
  

}
