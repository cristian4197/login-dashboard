import { BehaviorSubject, take, timer } from "rxjs";
import { ViewState } from "src/app/core/enums/view-state-app.enum";
import { StateApp } from "src/app/core/interface/state-app.interface";
import { ContentService } from "../../services/content.service";
import { Injectable } from "@angular/core";
import { TypeContent } from "../../enums/type-content.enum";
import { AudioVisualContent } from "src/app/core/interface/audio-visual.inteface";

const defaultState: StateApp = {
    state : ViewState.Loading
}

@Injectable()
export class MoviesPresenter {
    private viewState = new BehaviorSubject<StateApp>(defaultState);
    viewState$ = this.viewState.asObservable();

    constructor(private contentService:ContentService){  }

    run():void {
        this.setInitializeViewState();
    }

    private setInitializeViewState():void {
        this.delayToTask(500);
    }

    private setSkeletonState(value:boolean):void {
        const currentState = this.viewState.value;
        this.viewState.next({
            ...currentState,
            payload:{
                showSkeleton: value
            }
        });
    }

    private delayToTask(miliseconds:number):void {
        timer(miliseconds).pipe(take(1)).subscribe(()=> {
            this.setSkeletonState(false);
         });
    }

    copyOriginalListValues():AudioVisualContent[]  {
       return this.contentService.copyListOriginal(TypeContent.Movies);
    }

    onkeyPressItemsTofindEVent(itemsToFind:string):AudioVisualContent[] {
        return this.contentService.findItems(itemsToFind,TypeContent.Movies);
    }
}