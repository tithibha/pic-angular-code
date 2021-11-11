import {NgModule} from '@angular/core'
import { AppComponent} from './app.component'
import { GreeterComponent } from './utility/greeter/greeter.component'
import { BrowserModule} from '@angular/platform-browser'
import {UtilityModule} from './utility/utility.module'
import { LayoutModule } from './layout/layout.module';
import { AccountsModule } from './accounts/accounts.module'
import { FormsModule } from '@angular/forms'
import { ConsoleLoggerService } from './services/consoleLogger.service'
import { ApiLoggerService } from './services/apiLogger.service'
import { ILogger } from './services/ILogger.contract'


@NgModule({
  declarations:[AppComponent],
  bootstrap:[AppComponent],
  imports:[BrowserModule,UtilityModule,LayoutModule,AccountsModule],
  providers:[
     {provide:ConsoleLoggerService,useClass:ConsoleLoggerService},
    // {provide:"remoteApiAddress",useValue:"http://pic.in/logger/service"}
  ]
})
export class AppModule{

}
