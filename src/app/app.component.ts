import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PersonsInfoProject';
constructor(private router:Router,private jwtHelper:JwtHelperService, private authService:AuthService){}

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem('accessToken');
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }
  
  logOut = () => {
   this.authService.logoutFromThisDevice();
   //this.authService.logoutFromAllDevices();
  }
}
