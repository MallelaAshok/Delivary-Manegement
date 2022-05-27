import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import{ToastService} from 'src/app/shared/services/toastr/toastr.service'
declare const $:any

@Component({
  selector: 'app-delivary',
  templateUrl: './delivary.component.html',
  styleUrls: ['./delivary.component.scss']
})
export class DelivaryComponent implements OnInit {
  loading:boolean=false
 timelimit:any
  currentdate=new Date()
  logindata:any;
  navbtns: any = [];
  navLinks: any ;
  dropDown: any = [];
  routeNames:any
  admin: any;
  role:any;
  placeholder:string
  customersList: any = [];
  route: any;
  constructor(
    private service: ProjectService,
    private token: AuthenticationService,
    private router:Router,
    private toaster:ToastService
    
  ) {}

  ngOnInit(): void {
     this.loading=true
    this.toaster.showSuccess('working')
    this.service.userdetails$.subscribe(x=>{      
      if(x!=null){
        this.logindata=x       
        if(this.validLogin()){
          if(this.logindata.role=="admin"){
            this.admin=true
            this.route=this.logindata.route
           }
           else{
             this.admin=false
           }
        }
        else{
          alert("Session is Expired please Login Again.")
          this.router.navigate([''])
        }
       
      }
      else{
        this.router.navigate([''])
      }
     

    })
    this.navbtns = this.service.sidenav
    this.dropDown = this.service.dropdown
  
    this.get()
    this.GetSideNavTabs()
    this.GetRoutes()
    this.loading=false
  }
  getLocation(link:any){
   // window.open(` https://maps.google.com/maps?q=${lat}%2C${lng}&z=20&hl=en`)
   window.open(link);
  }

  slctext= new FormControl('0')
  searchtext = new FormControl('')
  selchan(key:any){
  this.slctext.setValue(key.value)
  this.searchtext.setValue('')
  }
  
  clear(){
    this.searchtext.setValue('') 
    this.customersList.forEach((x:any,d:number) => {
    $(`#Details${d}`).css({'background':"none"})
    });

  }

  search(value:any){
    
    if(this.slctext.value=="CN"){
    this.customersList.forEach((x:any,d:number) => {
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
  this.customersList=[]
  this.loading=true
 this.service.getdetails(this.logindata.route).subscribe(x=>{
   this.loading=false
 this.customersList=Object.values(x)
    })
  }


only(value:any):any{
    const numbers ="1234567890"
    const letters ="asdfghjklqwertyuiopxcvbnm."
    if(this.slctext.value=="CN"){if(letters.toLowerCase().includes(value.key.toLowerCase())==true) { return true } else  { return false} }
   else if(this.slctext.value=="MB"){if(numbers.toLowerCase().includes(value.key.toLowerCase())==true) { return true } else  { return false}}
   else return true
  }


  navigate(page:any){
    this.router.navigate([page])
    this.service.userdata(this.logindata) 
  }


  validLogin(){
    this.timelimit=this.currentdate.getMinutes()-this.logindata.loginTime.getMinutes()
    if(this.timelimit>1){
       return true
    }
    else{
      return true
    }
   
  }


  GetSideNavTabs(){
    this.service.GetSideNavTabs(this.logindata.role).subscribe(x=>{  
      this.navLinks=x
    })
  }


  GetRoutes(){
    this.loading=true
     this.service.getRoutes().subscribe(x=>{
      this.routeNames=x
      this.loading=false
    })
      }


  changecontent(event){
    if(this.slctext.value=="CN"){this.placeholder="Enter  customer Name"}
    else if(this.slctext.value=="MB"){this.placeholder="Mobile Number"}
    else if(this.slctext.value=="DN"){this.placeholder="Enter Door No."}
    else if(this.slctext.value=="LM"){this.placeholder="Enter Land Mark"}
    else { this.placeholder="Please Select the any Type"}
  }


    }



