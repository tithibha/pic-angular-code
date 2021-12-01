import {NgModule} from '@angular/core'
import { AppComponent} from './app.component'
import { BrowserModule} from '@angular/platform-browser'
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms'
import { ConsoleLoggerService } from './services/consoleLogger.service'
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { UsersDetailsComponent } from './admin/users-details/users-details.component';
import { UpdateComponent } from './admin/update/update.component';
import { SearchComponent } from './admin/search/search.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserAggregatorService } from './admin/services/userAggregator.service'
import { UtilityModule } from './utility/utility.module';
import { SearchboxComponent } from './admin/searchbox/searchbox.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations:[AppComponent, HomeComponent, UpdateComponent, SearchComponent, DeleteComponent,UsersDetailsComponent,CreateUserComponent, SearchboxComponent, LoginComponent],
  bootstrap:[AppComponent],
  imports:[HttpClientModule,BrowserModule,UtilityModule,LayoutModule,AppRoutingModule,FormsModule,CommonModule],
  providers:[
     {provide:ConsoleLoggerService,useClass:ConsoleLoggerService},
     {provide:UserAggregatorService, useClass:UserAggregatorService}
  ]
})
export class AppModule{

}
