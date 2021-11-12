import { UserInfoModel } from "src/app/models/userInfo.model";
import { Subject } from "rxjs";
export class UserAggregatorService{

  private usersSubject=new Subject<UserInfoModel>();
  usersObservableStream=this.usersSubject.asObservable();//stream - readonly
  addNewUser(userInfo:UserInfoModel){
    //api-DB
    this.usersSubject.next(userInfo);
  }
}
