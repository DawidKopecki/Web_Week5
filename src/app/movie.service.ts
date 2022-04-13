import { Injectable } from '@angular/core';
import { Movie } from 'src/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movie: Movie;

  constructor() { }

  moviesList = [
    new Movie('Scarface','1980','Jim Mark'),
    new Movie ('Dawn of The Dead','1990', 'Mike Samson'),
    new Movie ('Cars','2000','John Smith'),
    new Movie ('Fast and Furious', '2000','Mary Alen'),
    new Movie ('Taxi Driver','1990','Kate Jonnes')
  ];
  
  getMovies() {
    return this.moviesList.sort();
  }

  addMovie(movietitle: string, moviedirector: string, movieyear: string, ) {
    this.movieList.push(new Movie(movietitle, movieyear, moviedirector));
  }
}