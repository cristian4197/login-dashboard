import { Injectable } from "@angular/core";
import { BehaviorSubject, take, timer } from "rxjs";
import { StateApp } from "src/app/core/interface/state-app.interface";
import { ContentService } from "../../services/content.service";
import { ViewState } from "src/app/core/enums/view-state-app.enum";
import { AudioVisualContent } from "src/app/core/interface/audio-visual.inteface";
import { TypeContent } from "../../enums/type-content.enum";

const defaultState: StateApp = {
    state : ViewState.Loading
}
@Injectable()
export class AnimesPresenter {
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
       return this.contentService.copyListOriginal(TypeContent.Animes);
    }

    onkeyPressItemsTofindEVent(itemsToFind:string):AudioVisualContent[] {
        return this.contentService.findItems(itemsToFind,TypeContent.Animes);
    }
}