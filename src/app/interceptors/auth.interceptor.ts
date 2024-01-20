import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Get the auth toke from the servie
    const authToken=this.auth.getToken();

    // Clone the request and replace the original header with 
    // cloned header, updated with the autherization

    const authReq=request.clone({
      headers:request.headers.set('Authorization',authToken)
    });

    // send cloned request with header to the next handler
    return next.handle(authReq);
  }
}
