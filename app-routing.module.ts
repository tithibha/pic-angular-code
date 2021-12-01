import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { UsersDetailsComponent } from './admin/users-details/users-details.component';
import { UpdateComponent } from './admin/update/update.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { SearchComponent } from './admin/search/search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes:Routes=[    
  /*Route instance - Map Component ->Path */
{path:'admin',component:HomeComponent,children:[
    {path:'create',component:CreateUserComponent},
    {path:'delete',component:DeleteComponent},
    {path:'update',component:UpdateComponent},
    {path:'search',component:SearchComponent},
    {path:'users',component:UsersDetailsComponent}
  ]},
  {path:'', redirectTo:'/home', pathMatch:'full'}, 
  {path:'home',component:LoginComponent}
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }