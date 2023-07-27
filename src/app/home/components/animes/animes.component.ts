import { Component, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';
import { ContentService } from '../../services/content.service';
import { TypeContent } from '../../enums/type-content.enum';

@Component({
  selector: 'csv-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  listAnimes:AudioVisualContent[] = [];
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
    this.listAnimes = this.contentService.findItems(itemsToFind,TypeContent.Animes);
  }

  private setListOriginalValues():void {
    this.listAnimes = this.contentService.copyListOriginal(TypeContent.Animes);
  }
}
