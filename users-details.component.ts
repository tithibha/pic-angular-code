import { Component, OnDestroy,Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserInfoModel } from 'src/app/models/userInfo.model';
import { UserAggregatorService } from '../services/userAggregator.service';

@Component({
  selector: 'users-details-component',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']  
})

export class UsersDetailsComponent implements OnInit, OnDestroy {  
  usersList=new Array<UserInfoModel>();  
  constructor(public userAggregator:UserAggregatorService) {
  }
  
//life cycle hook method
  ngOnInit(): void {    
   this.usersList=this.userAggregator.getUsers();
  }
  ngOnDestroy(){
   
  }

}
