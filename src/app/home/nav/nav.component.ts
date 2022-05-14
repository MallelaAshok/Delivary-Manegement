import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
declare const $:any
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  timelimit:any
  currentdate=new Date()
  logindata:any;
  navbtns: any = [];
  navLinks: any ;
  dropDown: any = [];
  routeNames:any
  admin: any;
  role:any;
  customersList: any = [];
  route: any;
  constructor(
    private service: ProjectService,
    private token: AuthenticationService,
    private router:Router,
    
  ) {}

  ngOnInit(): void {
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
     
this.service.getdetails(this.logindata.route).subscribe(x=>{
  
this.customersList=Object.values(x)
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
     
    this.service.getRoutes().subscribe(x=>{
      
    this.routeNames=x
    })
      }
}
