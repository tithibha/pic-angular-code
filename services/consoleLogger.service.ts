import { ILogger } from "./ILogger.contract";

export class  ConsoleLoggerService implements ILogger{

  constructor(){
    console.log("Console Logger Istantiated");
  }
  writeLog(message:string):void{
    console.log("Console Logger",message);
  }
}
