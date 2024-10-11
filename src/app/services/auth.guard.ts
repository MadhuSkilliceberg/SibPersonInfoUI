import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    //get the jwt token which are present in the local storage
    const token = localStorage.getItem('accessToken');

    //Check if the token is expired or not and if token is expired then redirect to login page and return false
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }

  
  
}
