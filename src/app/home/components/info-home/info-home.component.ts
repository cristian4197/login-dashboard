import { Component, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { InfoHome } from '../../utils/info-home-media.utils';

@Component({
  selector: 'csv-info-home',
  templateUrl: './info-home.component.html',
  styleUrls: ['./info-home.component.scss']
})
export class InfoHomeComponent implements OnInit {
  listHome:AudioVisualContent[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listHome = [...InfoHome];    
  }

}
