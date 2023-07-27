import { Component, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { ContentService } from '../../services/content.service';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';
import { TypeContent } from '../../enums/type-content.enum';

@Component({
  selector: 'csv-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  listSeries:AudioVisualContent[] = [];
  constructor(private contentService:ContentService) { }

  ngOnInit(): void {
    this.setListOriginalValues();
   }

   onClickedDeleteItemEVent():void {
    this.setListOriginalValues();
   }
 
 
   onKeyBackSpaceorDeleteEvent(itemsToFind:string):void {
    if(itemsToFind === TypeKeyboardEvent.BackSpace){
      this.setListOriginalValues();
    } 
   }
   
   onkeyPressItemsTofindEVent(itemsToFind:string):void {
     this.listSeries = this.contentService.findItems(itemsToFind,TypeContent.Series);
   }
 
   private setListOriginalValues():void {
     this.listSeries = this.contentService.copyListOriginal(TypeContent.Series);
   }
}
