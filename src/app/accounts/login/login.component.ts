import { Component, Inject, OnInit,EventEmitter ,Output} from '@angular/core';
import { ApiLoggerService } from 'src/app/services/apiLogger.service';
import { ILogger } from 'src/app/services/ILogger.contract';
import {Router} from '@angular/router'
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    {provide:"loggerService",useClass:ApiLoggerService},
    {provide:"remoteApiAddress",useValue:"http://pic.in"}
  ]
})
export class LoginComponent implements OnInit {

  userName:string=''
  password:string=''
  @Output()
  onLogin=new EventEmitter<any>();
  constructor(@Inject("loggerService") public logger:ILogger,public router:Router) { }

  ngOnInit(): void {
  }

  //Handler
  onUserNameEdit(value:string):void{
    this.userName=value;
    this.logger.writeLog(this.userName);
  }
  //Handler
  onUserPasswordEdit(value:string):void{
    this.password=value;
    this.logger.writeLog(this.password);
  }
  clear():void{

    this.userName='';
    this.password='';
  }
  login(){

   // this.onLogin.emit({userName:this.userName,password:this.password});
   this.router.navigate(["admin",this.userName]);
  }


}
