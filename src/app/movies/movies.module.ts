import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    MovieDetailPageComponent
  ],
  imports: [
    SharedModule, MoviesRoutingModule],
})
export class MoviesModule {}
