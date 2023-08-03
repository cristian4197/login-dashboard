import { Component, OnDestroy, OnInit } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';
import { AnimesPresenter } from './animes.presenter';
import { Subscription } from 'rxjs';
import { PayloadState } from 'src/app/core/interface/view-state.interface';

@Component({
  selector: 'csv-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss'],
  providers:[AnimesPresenter]
})
export class AnimesComponent implements OnInit, OnDestroy {
  listAnimes:AudioVisualContent[] = [];

  constructor(private presenter:AnimesPresenter) { }

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
    this.listAnimes = this.presenter.onkeyPressItemsTofindEVent(itemsToFind);
  }

  private setListOriginalValues():void {
    this.listAnimes = this.presenter.copyOriginalListValues();
  }

  ngOnDestroy(): void {
    this.viewStateSub.unsubscribe();
  }
}
