import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations:[FooterComponent,HeaderComponent,MainComponent],
  exports:[FooterComponent,HeaderComponent,MainComponent]
})
export class LayoutModule
{

}
