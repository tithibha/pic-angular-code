import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiLoggerService } from 'src/app/services/apiLogger.service';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';
import { ILogger } from 'src/app/services/ILogger.contract';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[
    {provide:"loggerService",useClass:ApiLoggerService},
    {provide:"remoteApiAddress",useValue:"http://pic.nl"}
  ]
})
export class SignupComponent implements OnInit {
  userName:string=''
  password:string=''
  email:string=''

  //Constructor Injection
  constructor( @Inject("loggerService") public logger:ILogger) {


   }

  ngOnInit(): void {
  }

  clear(formRef:FormGroup){

    formRef.reset();
  }

  signup(formRef:FormGroup){


    if(formRef.valid){
        this.logger.writeLog(formRef.value);
    }

  }

}
