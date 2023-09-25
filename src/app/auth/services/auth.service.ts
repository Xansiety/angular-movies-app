import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { PostParamsRequest } from 'src/app/shared/services/base/models/params-request.model';
import { ApiService } from '../../shared/services/base/api.service';
import { LoginRequest } from '../models/login.model';
import { endpoints } from './../../api/api.config';

export interface UserLogged {
  username: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private readonly apiService: ApiService<any>) {}

  private userLogged$ = new BehaviorSubject<UserLogged | null>(null);
  private requestToken$ = new BehaviorSubject<string | null>(sessionStorage.getItem('request_token') ?? null);

  set setUserLogged(userLogged: UserLogged | null) {
    this.userLogged$.next(userLogged);
  }
  get getUserLogged(): UserLogged | null {
    return this.userLogged$.getValue();
  }

  get getRequestToken(): string | null {
    return this.requestToken$.getValue();
  }

  set setRequestToken(requestToken: string | null) {
    this.requestToken$.next(requestToken);
  }

  login(loginRequest: LoginRequest): Observable<any> {
    const payload = {
      username: loginRequest.username,
      password: loginRequest.password,
      request_token: this.getRequestToken,
    };

    const configPost: PostParamsRequest<any> = {
      url: `${endpoints.auth.login}`,
      payload,
    };

    return this.apiService.postService(configPost).pipe(
      take(1),
    );
  }
}
