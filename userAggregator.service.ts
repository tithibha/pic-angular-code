import { UserInfoModel } from "src/app/models/userInfo.model";
import { Subject } from "rxjs";
export class UserAggregatorService{

  private userList1: UserInfoModel[]=new Array<UserInfoModel>();
  private usersSubject=new Subject<UserInfoModel>();
  private user:any;
  usersObservableStream=this.usersSubject.asObservable();//stream - readonly
  addNewUser(userInfo:UserInfoModel){
    //api-DB
    this.usersSubject.next(userInfo);
    this.userList1.push(userInfo);
  }
  getUsers():UserInfoModel[]
  {
    return this.userList1;
  }
  removeUser(username:string):void{
   
    this.userList1.forEach((element,index) => {
    if(element.userName==username)
    {      
      this.userList1.splice(index,1)};      
    });    
  }
  
  search(username:string):UserInfoModel
  {
    this.userList1.forEach((element,index) => {
      if(element.userName==username)
      {      
        this.user=element
      };      
      });
      return this.user ;
  }
}
