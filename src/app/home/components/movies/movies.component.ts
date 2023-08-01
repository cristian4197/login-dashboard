import { Component, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';
import { MoviesPresenter } from './movies.presenter';

@Component({
  selector: 'csv-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers:[MoviesPresenter]  
})
export class MoviesComponent implements OnInit {
  listMovies:AudioVisualContent[] = [];

  constructor(private presenter:MoviesPresenter) { }

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
    this.listMovies = this.presenter.onkeyPressItemsTofindEVent(itemsToFind);
  }

  private setListOriginalValues():void {
    this.listMovies = this.presenter.copyOriginalListValues();
  }

}
