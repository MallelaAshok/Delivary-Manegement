import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CLASS_NAME } from '@angular/flex-layout';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

public data :BehaviorSubject<any>=new BehaviorSubject<any>(null)
  public sidenav :any= [
    {pageName:'nav', btnName:"Customers"},
    {pageName:'employee', btnName:"Delivery Boys"},
   
  ]

  public dropdown = [
    {searchTypes:"Customer Name" ,value:"CN"},
    {searchTypes:"Mobile",value:"MB"},
    {searchTypes:"Door No",value:"DN"},
    {searchTypes:"Land Mark",value:"LM"},
  ]
  constructor(private http:HttpClient) { }
  dburl="https://weknow-93749-default-rtdb.firebaseio.com"
 

  addnewCustomer(body:any):Observable<any>{
    const url=`${this.dburl}/customer/${body.routeId}.json`
    return this.http.put(url,body)
  }
  addNewEmployee(body:any):Observable<any>{
    const url=`${this.dburl}/employee.json`
    return this.http.put(url,body)
  }
  GetRoutes():Observable<any>{
    const url = `${this.dburl}/routes.json`
    return this.http.get(url)
  }
  GetSideNavTabs(role:any):Observable<any>{
    if(role=="admin"){
      const url = `${this.dburl}/dynamicTabs/adminTabs.json`
      return this.http.get(url)
    }
    else{
      const url = `${this.dburl}/dynamicTabs/userTabs.json`
      return this.http.get(url)
    }
    
  }
 
      save(body:any):Observable<any>{
        const url=`${this.dburl}/detailsBD.json`
        return this.http.put(url,body)
      }
      getdetails(route:any):Observable<any>{
        
        if(route=="all"){
         const url=`${this.dburl}/customers.json`
         return this.http.get(url)
        }
        else{
         const  url=`${this.dburl}/customer/${route}.json`
         return this.http.get(url)
        } 
      }
      getEmployes():Observable<any>{
        const url=`${this.dburl}/employee.json`
        return this.http.get(url)
      }
      logindetails(){
        const url = `${this.dburl}/logdetails.json`
        return this.http.get(url)
      }
      logindetailsbyName(name:any,password:any){

        const url = `${this.dburl}/logdetails/${name}/${password}.json`
        return this.http.get(url)
      }
      savelog(body:any){
        const url = `${this.dburl}/logdetails/${body.name}/${body.password}.json`
        return this.http.put(url,body)
      }
    userdetails$=this.data.asObservable()
      userdata(body:any){
        this.data.next(body)
      }

    SaveUser(body:any){
      const url = `${this.dburl}/logdetails/${body.username}/${body.password}.json`
      return this.http.put(url,body)
    }
    getRoutes(){
      const url=`${this.dburl}/Routes/.json`
      return this.http.get(url)
    }
      
}


