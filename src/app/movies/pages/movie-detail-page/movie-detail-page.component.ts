import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageResolverPipe } from 'src/app/shared/pipes/image-resolver.pipe';
import { endpoints } from '../../../api/api.config';
import { ApiService } from '../../../shared/services/base/api.service';
import { MovieDetailResponse } from '../../models/movie.model';
import { AlertService } from './../../../shared/services/alert-service.service';

@Component({
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss'],
})
export class MovieDetailPageComponent implements OnInit {
  public isLoading = true;
  public movie: MovieDetailResponse = {} as MovieDetailResponse;

  constructor(
    private readonly apiService: ApiService<MovieDetailResponse>,
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly alertService: AlertService
  ) {}

  ngOnInit(): void {
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
    this.apiService.getByIdService(getHttpConfig).subscribe({
      next: (response) => {
        this.movie = response;
      },
      error: (error) => {
        this.alertService.showError('Error', error.message);
        this.router.navigate(['/movies']);
      },
      complete: () => (this.isLoading = false),
    });
  }
}
