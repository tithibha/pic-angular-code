import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { filter,map } from 'rxjs/operators'

@Component({
  selector: 'signup-comp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  form=new FormGroup(
    {
      "userName":new FormControl("",Validators.required),
      "password":new FormControl("",Validators.required)
    }
  );
  constructor() { }

  ngOnInit(): void {

    this.form.valueChanges.pipe(
      map((value:any)=>{value.userName=value.userName.toUpperCase();return value;}),
      filter(()=>this.form.valid)).subscribe((value)=>{

        console.log(`Form Value ${JSON.stringify(value)}`);
      });


  }

  OnSignup(){
    console.log(this.form.value);
  }
}
