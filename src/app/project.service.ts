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

        const url = `${this.dburl}/users/${name}/${password}.json`
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



   

    getRoutes(){
      const url=`${this.dburl}/Routes/.json`
      return this.http.get(url)
    }
////**************** */ delivery boys.component
getallusers():Observable<any>{
  const url = `${this.dburl}/users.json`
  return this.http.get(url)
}
SaveDeliveryBoy(body:any):Observable<any>{
  const url = `${this.dburl}/users.json`
  return this.http.post(url,body)
}
getUserDetails(Id:any):Observable<any>{
  const url = `${this.dburl}/users/${Id}.json`
  return this.http.get(url)
}
updatedelivaryboydetails(body:any,Id):Observable<any>{
  const url = `${this.dburl}/users/${Id}.json`
  return this.http.put(url,body)
}
Deletedelivaryboy(Id:any):Observable<any>{
  const url = `${this.dburl}/users/${Id}.json`
  return this.http.delete(url)
}


//==========end=================
 

//*********user login details */********************** */
SaveUpdateUser(id:any,userName:any,password:any){
  const url = `${this.dburl}/userAuth/${userName}/${password}.json`
  return this.http.put(url,id)
}
DeleteUser(userName:any){
  const url = `${this.dburl}/userAuth/${userName}.json`
  return this.http.delete(url)
}
getuserdetails(userName:any,password:any){
  const url = `${this.dburl}/userAuth/${userName}/${password}.json`
  return this.http.get(url)
}

//========END=====================

//********************DYNAMIC TABS*******************/
getDynamicTabs(role:any){
  var url:string="";
  if(role=="admin"){    
     url = `${this.dburl}/dynamicTabs/adminTabs.json`    
  }
  else{
    url = `${this.dburl}/dynamicTabs/userTabs.json`
  }
  return this.http.get(url) 
}

}





