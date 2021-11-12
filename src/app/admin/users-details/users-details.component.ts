import { Component, OnDestroy, OnInit } from '@angular/core';
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
  subscriptionRef:any=null;
  constructor(public userAggregator:UserAggregatorService) {


  }
//life cycle hook method
  ngOnInit(): void {
    this.usersList.push(new UserInfoModel("tom","tom@123","tom@pic.com"));
    this.usersList.push(new UserInfoModel("Hary","hary@123","hary@pic.com"));
    this.usersList.push(new UserInfoModel("Jack","jack@123","jack@pic.com"));
   this.subscriptionRef= this.userAggregator.usersObservableStream.
   subscribe((userInfo:UserInfoModel)=>{
      this.usersList.push(userInfo);
    });
  }
  ngOnDestroy(){
    this.subscriptionRef.unsubscribe();
  }

}
