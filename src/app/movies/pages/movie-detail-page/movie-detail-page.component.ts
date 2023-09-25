import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageResolverPipe } from 'src/app/shared/pipes/image-resolver.pipe';
import { endpoints } from '../../../api/api.config';
import { ApiService } from '../../../shared/services/base/api.service';
import { MovieDetailResponse } from '../../models/movie.model';
import { AlertService } from './../../../shared/services/alert-service.service';
import { BaseComponent } from '../../../shared/components/base/base.component';

@Component({
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss'],
})
export class MovieDetailPageComponent
  extends BaseComponent<MovieDetailResponse>
  implements OnInit
{
  public movie: MovieDetailResponse = {} as MovieDetailResponse;

  override set setResponseService(value: MovieDetailResponse) {
    this.movie = value;
  }

  constructor(
    private readonly apiService: ApiService<MovieDetailResponse>,
    private alertService: AlertService,
    private router: Router,
    protected activeRoute: ActivatedRoute
  ) {
    super(apiService);
  }

  override ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.getMovieDetail(params['id']);
    });
  }

  displayPoster() {
    return ImageResolverPipe.prototype.transform(this.movie.poster_path);
  }

  private getMovieDetail(id: number) {
    const getHttpConfig = {
      url: endpoints.movies.detail,
      id,
    };

    this.getIdParamsRequest = getHttpConfig;
    this.getByIdRequest();
  }

  override onError(): void {
    this.alertService.showError('Error', 'Error loading movie detail');
    this.router.navigate(['/movies']);
  }
}
