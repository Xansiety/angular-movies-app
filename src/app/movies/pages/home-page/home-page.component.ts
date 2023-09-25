import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/base/api.service';
import { GetParamsRequest } from '../../../shared/services/base/models/params-request.model';
import { endpoints } from '../../../api/api.config';
import { PopularMoviesResponse, Movie } from '../../models/movie.model';
import { AlertService } from '../../../shared/services/alert-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { StorageService } from '../../../auth/services/storage.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent
  extends BaseComponent<PopularMoviesResponse>
  implements OnInit
{
  public readonly today = new Date();
  public popularMovies: Movie[] = [];

  constructor(
    protected apiService: ApiService<PopularMoviesResponse>,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly storageService: StorageService
  ) {
    super(apiService);
  }

  override set setResponseService(value: PopularMoviesResponse) {
    this.popularMovies = value.results;
  }

  override ngOnInit(): void {
    const httpGetConfig: GetParamsRequest = {
      url: endpoints.movies.popular,
    };
    this.getParamsRequest = httpGetConfig;
    this.getRequest();
  }

  override onError(): void {
    this.alertService.showError('Error', 'Error loading movies');
  }

  onShowDetails({ id }: Movie) {
    this.router.navigate(['/movies/detail', id], {
      relativeTo: this.route,
    });
  }

  logOut(): void {
    this.storageService.clearAllItems();
    this.router.navigate(['/auth']);
  }
}
