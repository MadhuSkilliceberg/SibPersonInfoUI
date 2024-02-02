import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // Get the auth toke from the servie
    const authToken = this.auth.getToken();

    // Clone the request and replace the original header with 
    // cloned header, updated with the autherization

    const authReq = request.clone({
      headers: request.headers.set('Authorization', authToken)
    });

    // send cloned request with header to the next handler
    //return next.handle(authReq);
    return next.handle(authReq).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
         
        console.log(event.headers);
        console.log(event.body);
       
        if (Number(event.type) == 0) {
          alert('test')
        }
        // event = event.clone({body: this.modifyBody(event.body)});
      }
      return event;
    }));


  }
}
