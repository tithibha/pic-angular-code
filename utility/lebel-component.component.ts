import {Component,Input} from '@angular/core'

@Component({
  templateUrl:'./lebel-component.component.html',
  selector:"app-label-component"
})
export class LabelComponentComponent{

  @Input()
  text:string=''

}
