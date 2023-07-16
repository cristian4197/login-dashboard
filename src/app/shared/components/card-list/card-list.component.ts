import { Component, Input, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';

@Component({
  selector: 'csv-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() list!:AudioVisualContent[];
  constructor() { }

  ngOnInit(): void {
  }

}
