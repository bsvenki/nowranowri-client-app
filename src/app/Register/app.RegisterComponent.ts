import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Register } from './app.RegisterModel';

@Component({
  templateUrl: './app.RegisterView.html',
  styleUrls: ['./app.RegisterStyle.css']
})
export class RegisterComponent {
  RegisterObj: Register = new Register();
  RegisterObjs: Array<Register> = new Array<Register>();

  // Add registered user
  Add() {
    this.RegisterObjs.push(this.RegisterObj);
    this.RegisterObj = new Register();
  }

  // Form Validation

  UserMobile = new FormControl('', [Validators.required]);
  UserEmail = new FormControl('', [Validators.required, Validators.email]);
  UserPassword = new FormControl('', [Validators.required]);
  

  RegisterForm: FormGroup = new FormGroup({
    mobile: this.UserMobile,
    email: this.UserEmail,
    password: this.UserPassword
    
  });

  getEmailErrorMessage() {
    return this.UserEmail.hasError('required') ? 'You must enter a value' :
      this.UserEmail.hasError('email') ? 'Not a valid email' :
        '';
  }

  getMobileErrorMessage() {
    return this.UserMobile.hasError('required') ? 'You must enter a value' : 
    this.UserEmail.hasError('tel') ? 'Not a valid mobile number' :
      '';
  }

  getPasswordErrorMessage() {
    return this.UserPassword.hasError('required') ? 'You must enter a value' : '';
  }
}


