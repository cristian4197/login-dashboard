import { Component, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { MOVIESLIST } from '../../utils/content-media.utils';

@Component({
  selector: 'csv-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  listMovies:AudioVisualContent[] = [];
  constructor() { }

  ngOnInit(): void {
   this.listMovies = MOVIESLIST;
   console.log("listMovies:",this.listMovies);
    
  }

}
