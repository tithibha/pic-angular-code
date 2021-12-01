import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserInfoModel } from '../models/userInfo.model';
import { ILoggedinUser } from './loggedinuser';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName:string=''
password:string=''
public loggedinuser:any
  constructor(public httpclient:HttpClient,router:Router) { 
    this.router=router;
  }
  errorMessage:string='';
  router:Router;
  ngOnInit(): void {
  }


onSubmit(formValue:any){
  console.log("logged in 2 "+this.loggedinuser);
  this.httpclient.get("http://172.17.242.81:8081/api/Login/Login?username="+this.userName+"&password="+this.password).
  subscribe((dat1)=>{

    this.router.navigate(['/admin']);
  } ,
  (err)=>{
    this.errorMessage="Invaild Credentials";
  },
  ()=>{
    console.log("Request Completed");
  });
//.subscribe(data=>this.loggedinuser=(data as string)) 

 
}
}
