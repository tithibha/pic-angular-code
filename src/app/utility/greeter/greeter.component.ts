import {Component,Input} from '@angular/core'

@Component({
  templateUrl:'./greeter.component.html',
  styleUrls:['./greeter.component.css'],
  selector:"greeter-component"
})
export class GreeterComponent{

  @Input()
  message:string=''

}
