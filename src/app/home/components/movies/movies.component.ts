import { Component, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { MOVIESLIST } from '../../utils/content-media.utils';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';
import { ContentService } from '../../services/content.service';
import { TypeContent } from '../../enums/type-content.enum';

@Component({
  selector: 'csv-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  listMovies:AudioVisualContent[] = [];
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
    this.listMovies = this.contentService.findItems(itemsToFind,TypeContent.Movies);
  }

  private setListOriginalValues():void {
    this.listMovies = this.contentService.copyListOriginal(TypeContent.Movies);
  }

}
