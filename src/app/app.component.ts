import { Component } from '@angular/core';
import { endpoints } from './api/api.config';
import { ApiService } from './shared/services/base/api.service';
import { GetParamsRequest } from './shared/services/base/models/params-request.model';
import { BaseComponent } from './shared/components/base/base.component';
import { LoginResponse } from './auth/models/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent<LoginResponse> {
  title = 'angular-movies-app';

  constructor(protected readonly apiService: ApiService<LoginResponse>) {
    super(apiService);

    const getConfig: GetParamsRequest = { url: `${endpoints.auth.getToken}` };
    this.setGetParamsRequest = getConfig;

    this.getRequest();
  }

  override set setResponseService(value: LoginResponse) {
    sessionStorage.setItem('request_token', value.request_token);
  }
}
