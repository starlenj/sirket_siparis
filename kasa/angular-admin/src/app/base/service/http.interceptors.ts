import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add auth token
    const requestWith = req.clone({
      setHeaders : {
        Authorization : `Bearer ${window.localStorage.getItem("order_token")}`
      }
    })
    return next.handle(requestWith);
  }
}
