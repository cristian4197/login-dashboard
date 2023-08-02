import { Component, OnDestroy, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';
import { SeriesPresenter } from './series.presenter';
import { Subscription } from 'rxjs';
import { PayloadState } from 'src/app/core/interface/view-state.interface';

@Component({
  selector: 'csv-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  providers:[SeriesPresenter]
})
export class SeriesComponent implements OnInit, OnDestroy {
  listSeries:AudioVisualContent[] = [];

  constructor(private presenter:SeriesPresenter) { }

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
      const { showSkeleton } = payload as PayloadState;
      this.showSkeleton = showSkeleton;
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
    this.listSeries = this.presenter.onkeyPressItemsTofindEVent(itemsToFind);
  }

  private setListOriginalValues():void {
    this.listSeries = this.presenter.copyOriginalListValues();
  }

  ngOnDestroy(): void {
    this.viewStateSub.unsubscribe();
  }
}
