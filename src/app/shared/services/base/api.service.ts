import {
HttpClient,
HttpErrorResponse,
HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { apiConfig } from '../../../api/api.config';
import {
GetParamsRequest,
PostParamsRequest,
} from './models/params-request.model';

@Injectable({ providedIn: 'root' })
export class ApiService<T> {

  protected httpConfig = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  get getApiKey(): string {
    return apiConfig.ApiKey;
  }

  getByIdService({ url, id }: { url: string; id: number }): Observable<T> {
    const httpConfig = this.httpConfig;

    return this.http.get<T>(`${url}/${id}`, httpConfig).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }


  getService({ url, params }: GetParamsRequest): Observable<T> {
    const httpConfig = this.httpConfig;

    const options = {
      httpConfig,
      params,
    };

    return this.http.get<T>(url, options).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  postService({ url, payload, params }: PostParamsRequest<T>): Observable<T> {
    const httpConfig = this.httpConfig;

    return this.http.post<T>(url, payload, httpConfig).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => error);
  }
}
