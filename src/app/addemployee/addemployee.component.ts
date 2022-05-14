import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  routes:any;
  locationUrl:any;
  lat:any;
  lng:any;
  employeeName =new FormControl('')
  ddlHubName = new FormControl('')
  contact=new FormControl('')
  address=new FormControl('')
  docs=new FormControl('')  
  constructor(private service:ProjectService,private router:Router) { }

  ngOnInit(): void {
  }
  AddNew(){
    const body = Object.assign({})
    body.employeeName=this.employeeName.value
    body.hubName=this.ddlHubName.value
    body.contact=this.contact.value
    body.address=this.address.value
    body.docs=this.docs.value
    body.employeeId=1001
    
    this.service.addNewEmployee(body).subscribe(x=>{
      alert("New employee is registered successfully" + x)
    })
  }

}
