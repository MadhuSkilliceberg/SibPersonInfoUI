import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserCredential } from '../Models/Users';
import { AuthenticatedResponse } from '../Models/Authentication';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DeviceDetectorService } from 'ngx-device-detector';
import { IPAddressService } from '../services/integrations/ipaddress.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials:UserCredential=new UserCredential();
  endpointUrl: string;
  showLogin:boolean=true;

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
  deviceInfo:any = null;
  ipAddress!:string;
  // credentials: LoginModel = {username:'', password:''};
  constructor(
    private router: Router,
     private http: HttpClient,
     private deviceService:DeviceDetectorService,
     private ipAddressService:IPAddressService
    
    ) {

    this.endpointUrl = environment.baseUrl + 'AuthenticationUsers/';
    this.epicFunction();
    // this.getIP();
   }
    ngOnInit(): void {
    
  }

  epicFunction() {  
    this.deviceInfo = this.deviceService.getDeviceInfo();
    // const isMobile = this.deviceService.isMobile();
    // const isTablet = this.deviceService.isTablet();
    // const isDesktopDevice = this.deviceService.isDesktop();
     console.log("DeviceInfo",JSON.stringify(this.deviceInfo));
    // console.log("Mobile",isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    // console.log("Tablet",isTablet);  // returns if the device us a tablet (iPad etc)
    // console.log("DesktopDevice",isDesktopDevice); // returns if the app is running on a Desktop browser.
  }


  login = ( form: NgForm) => {
    if (form.valid) {
      this.http.post<AuthenticatedResponse>( this.endpointUrl+"authentication", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json", 'Device-Info': JSON.stringify(this.deviceInfo)})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.Token;
          localStorage.setItem('accessToken', token);
        //   // Decode the token to extract user information
        // const decodedToken = this.decodeToken(token);
        // localStorage.setItem('user', JSON.stringify(decodedToken)); // Optionally save user data
          this.invalidLogin = false; 
          this.router.navigate(["/dashboard"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    }
  }

  SignUp( form: NgForm){
    if (form.valid) {
      this.http.post<AuthenticatedResponse>( this.endpointUrl+"signup", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          this.router.navigate(["/dashboard"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    }
  }

    // Decode the token
    decodeToken(token: string): any {
      try {
        return jwt_decode(token); // This will decode the JWT and return the payload
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }

    getIP()  
  {  
    this.ipAddressService.getIPAddress().subscribe((res:any)=>{  
      this.ipAddress=res.ip;  
      console.log('ipdata', res);
      console.log('ip', res.ip);
    });  
  }  
}

function jwt_decode(token: string): any {
  throw new Error('Function not implemented.');
}

