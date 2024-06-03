import { HttpErrorResponse } from '@angular/common/http';
import { Observable, combineLatest, map, throwError } from 'rxjs';
import HttpStatusCode from 'src/app/core/enums/http-status-code.enum';

export class CommonFunctions {
    public static httpErrorHandlerAlternative = (error: HttpErrorResponse) => {
    if (error.status === HttpStatusCode.NOT_FOUND) {
      window.location.href = 'not-found';
    }

    if (error.error) {
      if (error.error.errors) {
        for (const [errorField, errorMessage] of Object.entries(error.error.errors)) {
          return throwError(() => errorMessage);
        }
      } else if (error.error.errorDetails) {
        return throwError(() => error.error);
      }

      if (error.error.systemErrorMessage) {
        return throwError(() => error.error.systemErrorMessage);
      }

      if (error.error.error && error.error.error.message) {
        return throwError(() => error.error.error.message);
      }

      if (error.error.messages) {
        return throwError(() => error.error.messages);
      }

      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
    }

    return throwError(() => 'Something bad happened; please try again later.');
  };

  public static httpErrorHandler = (error: HttpErrorResponse) => {
    if (error.status === HttpStatusCode.NOT_FOUND) {
      window.location.href = 'not-found';
    }

    if (error.error) {
      if (error.error.errors) {
        for (const [errorField, errorMessage] of Object.entries(error.error.errors)) {
          return throwError(() => errorMessage);
        }
      } else if (error.error.errorDetails) {
        return throwError(() => error.error);
      }

      if (error.error.systemErrorMessage) {
        console.error(error.error.systemErrorMessage);
      }

      if (error.error.error && error.error.error.message) {
        return throwError(() => error.error.error.message);
      }

      if (error.error.messages) {
        return throwError(() => error.error.messages);
      }

      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
    }

    return throwError(() => 'Something bad happened; please try again later.');
  };

  public static applyDataFiltering = (
    sourceItems: Observable<any[]>,
    filterString: Observable<string>,
    filterPredicate: (string) => (...obj) => boolean
  ) => combineLatest([sourceItems, filterString])
    .pipe(
      map(([items, search]) => {
        if (!items) {
          return;
        }

        if (!search) {
          return items;
        }

        return items.filter(filterPredicate(search));
      })
    );
}