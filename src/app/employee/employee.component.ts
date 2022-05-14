import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
declare const $:any
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 userdata:any
  navbtns: any = [];
  dropDown: any = [];
  logindata:any;
  navbtns1: any ;
  admin: any;
  role:any;
  employeeList: any = [];
  routes:any=[];
  routeName =new FormControl('--Select--') 
  constructor(
    private service: ProjectService,
    private token: AuthenticationService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.service.userdetails$.subscribe(x=>{
      if(x!=null){
        this.logindata=x
        if(this.logindata.role=="admin"){  
          this.admin=true
         }
         else{
           this.admin=false
         }
      }
      else{
        alert("Session Expaired please login again")
        this.router.navigate(['home'])
      }
     

    })
    this.navbtns = this.service.sidenav
    this.dropDown = this.service.dropdown
  
    this.get()
    this.getRoutes()
    this.GetSideNavTabs()
  }
  getLocation(link:any){
   // window.open(` https://maps.google.com/maps?q=${lat}%2C${lng}&z=20&hl=en`)
   window.open(link);
  }
  slctext= new FormControl('CN')
  searchtext = new FormControl('')
  selchan(key:any){
  this.slctext.setValue(key.value)
  this.searchtext.setValue('')
  }
  clear(){
    this.searchtext.setValue('') 
    this.employeeList.forEach((x:any,d:number) => {
    $(`#Details${d}`).css({'background':"none"})
    });

  }
  search(value:any){
    if(this.slctext.value=="CN"){
    this.employeeList.forEach((x:any,d:number) => {
    if(x.customer_name==this.searchtext.value){
    
      $(`#Details${d}`).css({'background':"#256363"})
    }
    else{
      $(`#Details${d}`).css({'background':"none"})
    }
   });
    }

  }
get(){
     
this.service.getEmployes().subscribe(x=>{
  this.employeeList=Object.values(x)
})
  }
only(value:any):any{
    const numbers ="1234567890"
    const letters ="asdfghjklqwertyuiopxcvbnm."
    if(this.slctext.value=="CN"){if(letters.toLowerCase().includes(value.key.toLowerCase())==true)
      { return true } else 
      { return false}}
  }
  navigate(page:any){
    this.router.navigate([page])
  }
  getRoutes(){
     
    this.service.getRoutes().subscribe(x=>{
      
    this.routes=Object.values(x)
    const body = Object.assign({name:'--Select--',id:'N'})
    this.routes.unshift(body)
    })
      }
      GetSideNavTabs(){
        this.service.GetSideNavTabs(this.logindata.role).subscribe(x=>{  
          this.navbtns1=x
        })
      }    
}
