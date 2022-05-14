import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  routes:any;
  locationUrl:any;
  lat:any;
  lng:any;
  customerName =new FormControl('')
  doorNo = new FormControl('')
  contact=new FormControl('')
  landMark=new FormControl('')
  pinCode=new FormControl('')
  city=new FormControl('')
  ddlRouteName=new FormControl('')
  constructor(private service:ProjectService,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.GetRoutes();
    this.getLocation();
   }
   getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.locationUrl=` https://maps.google.com/maps?q=${this.lat}%2C${this.lng}&z=20&hl=en`
        }
      },
        (error: any) => console.log(error));
        
    } else {
      alert("Geolocation is not supported by this browser.");
    }
}
  AddNew(){
    const body = Object.assign({})
    body.customerName=this.customerName.value
    body.doorNo=this.doorNo.value
    body.contact=this.contact.value
    body.landMark=this.landMark.value
    body.pinCode=this.pinCode.value
    body.locationUrl=this.locationUrl
    body.city=this.city.value
    body.routeId=this.ddlRouteName.value
    body.routeName=this.ddlRouteName.value
    body.customerId=1
    this.service.addnewCustomer(body).subscribe(x=>{
      console.log(x)
    })
  }
  
  GetRoutes(){
    this.service.GetRoutes().subscribe(x=>{
     this.routes=x;
    //  for (var val of x) {
    //   this.routes.push(a);
    // }
     console.log(this.routes)
  })
}
 


}
