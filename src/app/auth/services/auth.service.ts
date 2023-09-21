import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseAbstractService } from '../../shared/services/base/base-abstract.service';
import { LoginRequest } from '../models/login.model';
import { apiConfig } from './../../api/api.config';
import { endpoints } from './../../api/api.config.example';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly baseAbstractService: BaseAbstractService<any>) {}

  login(loginRequest: LoginRequest): Observable<any> {
    const url = `${endpoints.auth.login}`;
    const payload = loginRequest;
    const clientParams = apiConfig.ApiKey;
    return this.baseAbstractService.post({ url, payload, clientParams });
  }
}
