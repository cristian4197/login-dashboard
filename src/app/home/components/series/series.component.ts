import { Component, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';
import { SeriesPresenter } from './series.presenter';

@Component({
  selector: 'csv-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  providers:[SeriesPresenter]
})
export class SeriesComponent implements OnInit {
  listSeries:AudioVisualContent[] = [];

  constructor(private presenter:SeriesPresenter) { }

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
    this.listSeries = this.presenter.onkeyPressItemsTofindEVent(itemsToFind);
  }

  private setListOriginalValues():void {
    this.listSeries = this.presenter.copyOriginalListValues();
  }
}
