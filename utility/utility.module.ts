import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponentComponent } from './lebel-component.component';




@NgModule({
  declarations: [
    LabelComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LabelComponentComponent]
})
export class UtilityModule { }
