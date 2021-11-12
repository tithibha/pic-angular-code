import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UtilityModule } from '../utility/utility.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreateUserComponent,
    UsersDetailsComponent,
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    UtilityModule,
    FormsModule,
    RouterModule
  ],
  exports:[AdminPanelComponent]
})
export class AdminModule { }
