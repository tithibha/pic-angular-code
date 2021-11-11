import { NgModule } from "@angular/core";
import { GreeterComponent } from "./greeter/greeter.component";
import { LabelComponent } from "./label/label.component";

@NgModule({
  declarations:[GreeterComponent,LabelComponent],
  exports:[GreeterComponent,LabelComponent]
})
export class UtilityModule{

}
