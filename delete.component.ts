import { Component, OnInit} from '@angular/core';
import { UserAggregatorService } from '../services/userAggregator.service';
import { SearchComponent } from '../search/search.component';
import { FormGroup } from '@angular/forms';
import { UserInfoModel } from 'src/app/models/userInfo.model';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']  
})
export class DeleteComponent implements OnInit {
  constructor(public userAggregator:UserAggregatorService,public logger:ConsoleLoggerService) {
   }
  
  ngOnInit(): void {    
  }
msg:string=''
  
  ngOnDestroy(){    
  }
  delete(formRef:FormGroup){   
    //this.logger.writeLog("from delete  "+this.msg);
    this.userAggregator.removeUser(this.msg);
  }
  getMsgFromBaby($event:any) {this.msg = $event;}
}
