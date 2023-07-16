import { Component, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { ANIMES } from '../../utils/content-media.utils';

@Component({
  selector: 'csv-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  listAnimes:AudioVisualContent[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listAnimes = ANIMES;
   }
}
