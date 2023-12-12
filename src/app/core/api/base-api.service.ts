import { CommonFunctions } from '../../shared/functions/common-functions';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApi {

  constructor(private http: HttpClient) { }
  
  public get2<T>(url: string, options?: any): Observable<any> {
    return this.http.get<T>(url, options)
      .pipe(
        retry(1),
        catchError(CommonFunctions.httpErrorHandlerAlternative)
      );
  }

  public get<T>(url: string, options?: any): Observable<any> {
    return this.http.get<T>(url, options)
      .pipe(
        retry(1),
        catchError(CommonFunctions.httpErrorHandler)
      );
  }

  public post<T>(url: string, data: any, options?: any): Observable<any> {
    return this.http.post<T>(url, data, options)
      .pipe(
        map(result => result),
        catchError(CommonFunctions.httpErrorHandler)
      );
  }

  public put<T>(url: string, data: any, options?: any): Observable<any> {
    return this.http.put<T>(url, data, options)
      .pipe(
        catchError(CommonFunctions.httpErrorHandler)
      );
  }

  public delete<T>(url: string, options?: any): Observable<any> {
    return this.http.delete<T>(url, options)
      .pipe(
        catchError(CommonFunctions.httpErrorHandler)
      );
  }
}
