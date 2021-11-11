import { Component } from '@angular/core';
import { ConsoleLoggerService } from './services/consoleLogger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //properties - public
  title:string = 'demo';
  author:string='venu'

  constructor(public consoleLogger:ConsoleLoggerService){

  }
  //behaviors
  getTitle():string{
     return this.title;
  }

  onLoginCallback(data:any){

    this.consoleLogger.writeLog(data);
  }
}
