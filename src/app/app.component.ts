import { Component } from '@angular/core';
import { Movie } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mySelectedMovies: Movie;

  setSelectedMovie(movie:Movie) {
    this.mySelectedMovies = movie;
  }
  
  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }
}
