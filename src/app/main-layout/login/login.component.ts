import { Component, OnInit, Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: any;
  userPassword: any;
  errorMessage: any[] = [];
  errorMessagePassword: any[] = [];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.errorMessage = [];
    this.errorMessagePassword = [];
    if (this.userName == 'dharmender' && this.userPassword == 'test') {
    this.router.navigateByUrl('/parentComp')
      return this.userName;
    } else {
      if (this.userName == '' || this.userName !== 'dharmender') {
        this.errorMessage.push('Username Incorrect');
      }
      if (this.userPassword == '' ||  this.userPassword !== 'test') {
        this.errorMessagePassword.push('Password Incorrect');
      }
    }
  }

  onSubmit() {
    console.log('Usre Name', this.userName);
    if (this.userName == 'dharmender' && this.userPassword == 'test') {
      return this.userName;
    } else {
      this.errorMessage.push('UserName & Password Incorrect')
    }
    
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    this.userName = inputValue
    console.log('inputValue', inputValue);
    
  }

  onKeyPass(event: any) {
    const inputValue = event.target.value;
    this.userPassword = inputValue
    console.log('inputValue', inputValue);
    
  }

}
