import { Component, Input } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';

@Component({
  selector: 'csv-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() list!:AudioVisualContent[];
}
