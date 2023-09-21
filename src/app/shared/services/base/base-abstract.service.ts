import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { PostParamsRequest } from './models/params-request.model';

@Injectable({
  providedIn: 'root',
})
export class BaseAbstractService<T> {
  constructor(private http: HttpClient) {}

  post({ url, payload, clientParams }: PostParamsRequest<T>): Observable<T> {
    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    const options = {
      headers,
      clientParams,
    };

    return this.http.post<T>(url, payload, options).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => error);
  }
}
