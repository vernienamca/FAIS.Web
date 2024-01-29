import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  private baseUrl: string;

  constructor(
    private router: Router,
    private _authService: AuthService,
  ) {
    this.baseUrl = environment.apiGatewayBaseUrl;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');
    if (request.url.indexOf(this.baseUrl) > -1) {
      if (!token && request.url.indexOf('user/forgot-password') === -1 && request.url.indexOf('user/settings') === -1
        && request.url.indexOf('user/tempkey') === -1 && request.url.indexOf('user/reset-password') === -1) {
        this.router.navigate(['/login']);
      }
    }
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this._authService.logout();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}