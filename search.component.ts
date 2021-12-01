
import { Component, OnInit,Inject,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserInfoModel } from 'src/app/models/userInfo.model';
import { UserAggregatorService } from '../services/userAggregator.service';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';
import { ILogger } from 'src/app/services/ILogger.contract';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
 
})
export class SearchComponent implements OnInit {
  msgFromChild1 =new Array<string>();
  userList=new Array<UserInfoModel>();
  userName:string=''
  user=new UserInfoModel("","","");
  constructor(public userAggregator:UserAggregatorService, public logger:ConsoleLoggerService) {     
  }
  @Output() callParent = new EventEmitter();
  @Output() callUpdate=new EventEmitter();
  ngOnInit(): void {   
    this.userList=this.userAggregator.getUsers();
    //this.logger.writeLog(this.userList.length.toString())
  }

getMsgFromsearchbox($event:any):void
{
  this.user=$event
  //this.logger.writeLog("getMsgFromsearchbox "+this.user.userName)
  this.callParent.emit(this.user.userName);
}

}
