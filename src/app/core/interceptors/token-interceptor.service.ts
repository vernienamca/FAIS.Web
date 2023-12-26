import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private router: Router,
    private _authService: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      this.router.navigate(['/login']);
    }
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
    }
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