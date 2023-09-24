import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageResolverPipe } from '../../../shared/pipes/image-resolver.pipe';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie = {} as Movie;

  @Output() onSelectMovieEmitter = new EventEmitter<Movie>();

  constructor() {}

  ngOnInit(): void {}

  onShowDetails() {
    this.onSelectMovieEmitter.emit(this.movie);
  }

  displayPoster() {
    return ImageResolverPipe.prototype.transform(this.movie.poster_path);
  }
}
