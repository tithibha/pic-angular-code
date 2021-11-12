//route state configuration
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[

  {path:'home', component:HomeComponent , children:[
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent}
  ]},
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'admin/:username',component:AdminPanelComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

}


