import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import{ToastService} from 'src/app/shared/services/toastr/toastr.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading:boolean=false
data:any
name =new FormControl('')
password = new FormControl('')
  constructor(private service:ProjectService,private router:Router,public toast:ToastService) { }

  ngOnInit(): void {
  }
  login(){
    this.loading=true   
    if(this.name.value!=""&& this.password.value!=""){

      this.service.getuserdetails(this.name.value,this.password.value).subscribe(x=>{
        this.loading=false
        if(x!=null){ 
           localStorage.setItem('userId',JSON.stringify(x))   
          this.router.navigate(['main'])
              }
        else{
          this.toast.showWarning("Invalid User Name or Password ")
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



