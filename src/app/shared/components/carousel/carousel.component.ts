import { Component, Input } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';

@Component({
  selector: 'csv-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() listHome!:AudioVisualContent[];
  @Input() showSkeleton = false;
}
