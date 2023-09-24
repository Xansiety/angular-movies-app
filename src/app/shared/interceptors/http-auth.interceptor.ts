import {
HttpEvent,
HttpHandler,
HttpInterceptor,
HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/base/api.service';

@Injectable()

export class HttpAuthInterceptor<T> implements HttpInterceptor {

  constructor( private apiService: ApiService<T> ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const apiKey =  this.apiService.getApiKey;

    if (apiKey) {
      request = request.clone({
        setParams: {
          api_key: apiKey,
        },
      });
      return next.handle(request);
    }

    return next.handle(request);
  }
}
