import { Component, OnInit } from '@angular/core';
import { MediaContent } from 'src/app/core/interface/movies-inteface';
import { MOVIESLIST } from '../../utils/content-media.utils';

@Component({
  selector: 'csv-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  listMovies:MediaContent[] = [];
  constructor() { }

  ngOnInit(): void {
   this.listMovies = MOVIESLIST;
  }

}
