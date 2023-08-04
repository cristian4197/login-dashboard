import { Component, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { InfoHome } from '../../utils/info-home-media.utils';
import { take, timer } from 'rxjs';

@Component({
  selector: 'csv-info-home',
  templateUrl: './info-home.component.html',
  styleUrls: ['./info-home.component.scss']
})
export class InfoHomeComponent implements OnInit {
  listHome:AudioVisualContent[] = [];
  showSkeleton = true;
  constructor() { }

  ngOnInit(): void {
    this.delayToLoadedImages();
  }

  private delayToLoadedImages():void {
    timer(500).pipe(take(1)).subscribe(()=>{
      this.loadImageData();
    }
  );
  }

  private loadImageData():void {
    this.listHome = [...InfoHome];
    this.showSkeleton = false;
  }

}
