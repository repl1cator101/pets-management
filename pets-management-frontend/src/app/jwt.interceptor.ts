import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.toLocaleLowerCase() !== "http://localhost:8080/api/auth/login") {
      let jwt = localStorage.getItem("jwt")
      let tokenizedReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt}`
        }
      })
      return next.handle(tokenizedReq)
    }
    return next.handle(request)
  }
}
