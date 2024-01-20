import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserCredential } from '../Models/Users';
import { AuthenticatedResponse } from '../Models/Authentication';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials:UserCredential=new UserCredential();
  endpointUrl: string;

  // constructor(private formBuilder: FormBuilder) { }

  // ngOnInit() {
  //   // this.loginForm = this.formBuilder.group({
  //   //   email: ['', [Validators.required, Validators.email]],
  //   //   password: ['', Validators.required]
  //   // });
  // }

  onSubmit() {
  //   
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  // //   Perform login logic here
  // //  const email = this.loginForm.get('username').value;
  // //   const password = this.loginForm.get('password').value;
  //   this.credentials.UserName=this.loginForm.get('username').value
  //   this.credentials.Password=this.loginForm.get('password').value

  // //   Reset the form
  //   this.loginForm.reset();


  }

  invalidLogin!: boolean;
  // credentials: LoginModel = {username:'', password:''};
  constructor(private router: Router, private http: HttpClient) {

    this.endpointUrl = environment.baseUrl + 'AuthenticationUsers/';
   }
  ngOnInit(): void {
    
  }
  login = ( form: NgForm) => {
    if (form.valid) {
      this.http.post<AuthenticatedResponse>( this.endpointUrl+"authentication", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.Token;
          localStorage.setItem("jwt", token); 
          this.invalidLogin = false; 
          this.router.navigate(["/dashboard"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    }
  }
}
