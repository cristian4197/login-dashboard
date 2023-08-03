import { Component, OnDestroy, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';
import { MoviesPresenter } from './movies.presenter';
import { Subscription } from 'rxjs';
import { PayloadState } from 'src/app/core/interface/view-state.interface';

@Component({
  selector: 'csv-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers:[MoviesPresenter]  
})
export class MoviesComponent implements OnInit, OnDestroy {
  listMovies:AudioVisualContent[] = [];

  constructor(private presenter:MoviesPresenter) { }

  viewState$ = this.presenter.viewState$;

  showSkeleton = true;

  private viewStateSub!: Subscription;

  ngOnInit(): void {
    this.presenter.run();
    this.setSkeletonState();
    this.setListOriginalValues();
  }

  private setSkeletonState():void{
    this.viewStateSub = this.viewState$.subscribe(({ payload }) => {
      if(payload) {
        const { showSkeleton } = payload as PayloadState;
        this.showSkeleton = showSkeleton;
      }
    });
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

  ngOnDestroy(): void {
    this.viewStateSub.unsubscribe();
  }

}
