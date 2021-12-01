import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UserAggregatorService } from '../services/userAggregator.service';
import { UserInfoModel } from 'src/app/models/userInfo.model';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  userName:string=''
  user=new UserInfoModel("","","");
  userList=new Array<UserInfoModel>();
  @Output() callSearchView = new EventEmitter();
  constructor(public userAggregator:UserAggregatorService, public logger:ConsoleLoggerService) { }

  ngOnInit(): void {
    this.userList=this.userAggregator.getUsers();
  }
  search(event:Event):void{
    this.userName = (<HTMLInputElement>event.target).value;
    //this.logger.writeLog("from serachbox "+this.userName);
    this.user=this.userAggregator.search(this.userName)
    this.callSearchView.emit(this.user);   
  }
}

