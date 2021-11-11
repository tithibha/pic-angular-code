import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityModule } from '../utility/utility.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';




@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ChangepasswordComponent

  ],
  imports: [
    CommonModule,
    UtilityModule,
    FormsModule
  ],
  exports:[LoginComponent,SignupComponent]
})
export class AccountsModule { }
