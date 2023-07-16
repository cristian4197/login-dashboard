import { Component, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { SERIES } from '../../utils/content-media.utils';

@Component({
  selector: 'csv-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  listSeries:AudioVisualContent[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listSeries = SERIES;
   }
}
