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

  public static sortPredicate<TObject, TProperty>(predicate: (p: TObject) => TProperty, isAscending: boolean = true): (a: TObject, b: TObject) => number {
    return (a, b) => {
      if (predicate(a) > predicate(b)) {
        return isAscending ? 1 : -1;
      }
      if (predicate(a) < predicate(b)) {
        return isAscending ? -1 : 1;
      }
      return 0;
    };
  }

  public static deepClone<T>(items: T): T {
    return JSON.parse(JSON.stringify(items)) as T;
  }

  public static isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }

  public static removeNulls = (object: any) => JSON.parse(
    JSON.stringify(object),
    (key, value) => value == null ? undefined : value
  );

  public static formatBase64toDataUrl = (b64Data: string, contentType: string = '') => `data:${contentType};base64,` + b64Data;

  public static getFileExtension(fileName: string): string {
    if (!fileName) {
      return '';
    }
    const index = fileName.lastIndexOf('.');
    return fileName.substring(index + 1);
  }

  public static bytesToSize(bytes: number) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) {
      return '0 Byte';
    }
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
  }

  public static stringToBytes(content: string): number {
    if (!content) {
      return;
    }
    const byteArray = Buffer.from(content, 'base64');
    return byteArray?.length;
  }
}