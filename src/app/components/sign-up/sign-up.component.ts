import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
// import Stepper from 'bs-stepper';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  constructor( private _LoginService : LoginService) {}

  ngOnInit() {}

  onSubmit(){
    console.log(this.profileForm.value);
    this._LoginService.sigup(this.profileForm.value)
    // this._LoginService.sigup(this.profileForm.value).subscribe(response=>{
    //   console.log("response is ");
    //   console.log(response);
      
      
  //  })
  }

}
