import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string="";
  password:string="";
  constructor() { }
  onSubmit(formValue:any){
    console.log(formValue.controls);
  }
  ngOnInit(): void {
  }

}
