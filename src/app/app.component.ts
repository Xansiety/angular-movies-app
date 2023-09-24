import { Component } from '@angular/core';
import { endpoints } from './api/api.config';
import { ApiService } from './shared/services/base/api.service';
import { GetParamsRequest } from './shared/services/base/models/params-request.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-movies-app';

  constructor(
    private apiService: ApiService<any>
  ) {
    const getConfig: GetParamsRequest = {
      url: `${endpoints.auth.getToken}`,
    };

    this.apiService.getService(getConfig).subscribe({
      next: ({ request_token }) => {
        sessionStorage.setItem('request_token', request_token);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
