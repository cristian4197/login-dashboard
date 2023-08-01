import { Component, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';
import { ContentService } from '../../services/content.service';
import { TypeContent } from '../../enums/type-content.enum';
import { AnimesPresenter } from './animes.presenter';

@Component({
  selector: 'csv-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss'],
  providers:[AnimesPresenter]
})
export class AnimesComponent implements OnInit {
  listAnimes:AudioVisualContent[] = [];

  constructor(private presenter:AnimesPresenter) { }

  viewState$ = this.presenter.viewState$;

  ngOnInit(): void {
    this.presenter.run();
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
    this.listAnimes = this.presenter.onkeyPressItemsTofindEVent(itemsToFind);
  }

  private setListOriginalValues():void {
    this.listAnimes = this.presenter.copyOriginalListValues();
  }
}
