import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any
  logindata={
            'name':"","role":"",
            "loginTime":new Date(),
            "currentTime":new Date(), 
            "isExpired":false,
            "route":""
          }
          logindatadefault={
            'name':"","role":"",
            "loginTime":new Date(),
            "currentTime":new Date(), 
            "isExpired":false,
            "route":""
          }
name =new FormControl('')
password = new FormControl('')
  constructor(private service:ProjectService,private router:Router) { }

  ngOnInit(): void {
  }


  // log(){
  //   const body = Object.assign({})
  //   body.name=this.name.value
  //   body.password=this.password.value
  //   body.role="admin"
  //   body.option1="optionVal1"
  //   body.option2="optionVal2"
  //   this.service.savelog(body).subscribe(x=>{
  //     console.log(x)
  //   })
  // }
  login(){
    if(this.name.value!=""&& this.password.value!=""){
      this.service.logindetailsbyName(this.name.value,this.password.value).subscribe(x=>{
        if(x!=null ){   
          this.data=x            
          this.logindata.name=this.name.value   
          this.logindata.role=this.data.role 
          this.logindata.route=this.data.route         
          this.router.navigate(['nav'])
          this.service.userdata(this.logindata)        
        }
        else{
          // this.toast.showWarning("Plase Enter User Name and Password")
        }
     })
    }  
    else{
      alert('Plase Enter User Name and Password .')
    } 
  }

  // run(){
  //   var sec =0
  //   var min=0
  //   var hr=0
  //   setInterval(()=>{
  //      sec=sec+1
  //      if(sec==60){
  //        min=min+1
  //        sec=0
  //        if(min==10){
  //         this.service.userdata(this.logindatadefault)
  //        }
  //      }
      
  //   },1000)

  
  // }
}
