import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
import { UserInfoModel } from 'src/app/models/userInfo.model';
import { UserAggregatorService } from '../services/userAggregator.service';
@Component({
  selector: 'create-user-component',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userName:string=''
  password:string=''
  email:string=''

  //Constructor Injection
  constructor(public userAggregator:UserAggregatorService) {}

  ngOnInit(): void {
  }

  clear(formRef:FormGroup){

    formRef.reset();
  }

  signup(formRef:FormGroup){


    if(formRef.valid){
        // Invoke Service
        const userInfo=new UserInfoModel(this.userName,this.password,this.email);
        this.userAggregator.addNewUser(userInfo);
    }

  }

}
