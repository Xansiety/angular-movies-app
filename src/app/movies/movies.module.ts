import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HomePageComponent,
    MovieDetailPageComponent,
    MovieCardComponent,
  ],
  imports: [CoreModule, SharedModule, PrimeNgModule, MoviesRoutingModule],
})
export class MoviesModule {}
