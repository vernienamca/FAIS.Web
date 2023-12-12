import { AuthApi } from './../api/auth-api.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogoutTriggered = false;
  
  constructor(
    private _authApi: AuthApi,
    private _router: Router
  ) { }

  logout() {
    try {
      localStorage.clear();
      this._router.navigateByUrl('/login').then(() => {
        window.location.reload();
      });
    } catch (e) {
      console.log('logout errror: ', e);
    }
  }

  authenticate(username: string, password: string): Observable<any> {
    this.isLogoutTriggered = false;
    return this._authApi.authenticate(username, password);
  }
}
