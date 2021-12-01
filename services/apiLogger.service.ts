import {Inject,Injectable} from '@angular/core'
import { ConsoleLoggerService } from './consoleLogger.service';
import { ILogger } from "./ILogger.contract";

@Injectable()
export class ApiLoggerService implements ILogger{

  constructor(@Inject("remoteApiAddress") public baseUrl:string, public consoleLogger:ConsoleLoggerService){
      consoleLogger.writeLog("Api Logger Service Instantiated");
  }
  writeLog(messge:string):void{
    this.consoleLogger.writeLog(`Api Logger ,${messge} , ${this.baseUrl}`);
  }
}
