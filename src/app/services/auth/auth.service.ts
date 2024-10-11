import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpointUrl!: string;
  
  constructor(private jwtHelper:JwtHelperService, private http: HttpClient, private router:Router) { 
    this.endpointUrl = environment.baseUrl + 'AuthenticationUsers/';

  }

  logoutFromAllDevices() {
    this.http.post(this.endpointUrl+ 'logout/all-devices', {}).subscribe(() => {
        // Clear the token from local storage (since the user is logging out from all devices)
        localStorage.removeItem('accessToken');
        
        // Optionally redirect to the login page
        this.router.navigate(['/']);
    });
}

logoutFromThisDevice() {
  this.http.post(this.endpointUrl+ 'logout/this-device', {}).subscribe(() => {
      // Clear the token from local storage (since the user is logging out from this device)
      localStorage.removeItem('accessToken');
      
      // Optionally redirect to the login page
      this.router.navigate(['/']);
  });
}




  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem('accessToken');
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }

  getToken():string{
    if(this.isUserAuthenticated()){
      const token=localStorage.getItem('accessToken');
      return `bearer ${token}`
    }
    return '';
  }
}
