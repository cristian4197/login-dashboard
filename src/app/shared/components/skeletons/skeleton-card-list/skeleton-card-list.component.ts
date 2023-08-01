import { Component, Input } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';

@Component({
  selector: 'csv-skeleton-card-list',
  templateUrl: './skeleton-card-list.component.html',
  styleUrls: ['./skeleton-card-list.component.scss']
})
export class SkeletonCardListComponent {
  @Input() list!:AudioVisualContent[];
}
