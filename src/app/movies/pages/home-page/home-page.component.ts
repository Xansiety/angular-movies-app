import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/base/api.service';
import { GetParamsRequest } from '../../../shared/services/base/models/params-request.model';
import { endpoints } from '../../../api/api.config';
import { PopularMoviesResponse, Movie } from '../../models/movie.model';
import { AlertService } from '../../../shared/services/alert-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public readonly today = new Date();
  public popularMovies: Movie[] = [];
  public isLoading = true;

  constructor(
    private readonly apiService: ApiService<PopularMoviesResponse>,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const httpGetConfig: GetParamsRequest = { url: endpoints.movies.popular };
    this.apiService.getService(httpGetConfig).subscribe({
      next: (response) => {
        this.popularMovies = response.results;
      },
      error: (error) => {
        this.alertService.showError(
          'Error',
          'An error has occurred, please try again later.'
        );
      },
      complete: () => (this.isLoading = false),
    });
  }

  onShowDetails({ id }: Movie) {
    this.router.navigate(['/movies/detail', id], {
      relativeTo: this.route,
    });
  }
}
