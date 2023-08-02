import { fakeAsync, tick } from "@angular/core/testing";
import { ContentService } from "../../services/content.service";
import { MoviesPresenter } from "./movies.presenter";
import { AudioVisualContent } from "src/app/core/interface/audio-visual.inteface";
import { PayloadState } from "src/app/core/interface/view-state.interface";

describe('@MoviesPresenter', () => {
    let presenter: MoviesPresenter;
    let mockContentService: jasmine.SpyObj<ContentService> = jasmine.createSpyObj('ContentService',['findItems','copyListOriginal']);
  
    beforeEach(() => {
        presenter = new  MoviesPresenter(mockContentService);
    });
  
    describe('When run is called', () =>{
      it('#Should set skeleton to false',fakeAsync(() => {
       presenter.run();
       tick(500);
        let result = true;
        presenter.viewState$.subscribe(({ payload })=>{
          const { showSkeleton } = payload as PayloadState;
          result = showSkeleton;
        });
       expect(result).toBeFalse();
      }));
    });
  
  
    describe('When copyOriginalListValues is called', () => {
      it('#Should call copyListOriginal', () => {
        const response:AudioVisualContent[] = [{
          name:'Avatar',
          description:'test',
          gender:'',
          imageurl:'',
          releaseYear:''
        }];
        let result:AudioVisualContent[];
        mockContentService.copyListOriginal.and.returnValues(response);
        result = presenter.copyOriginalListValues();
        expect(result.length).toBeGreaterThan(0);
      });
    });
  
  
    describe('When onkeyPressItemsTofindEVent is called',() => {
      it('#Should listMovies length is greater than zero',() => {
        const itemsToFind = 'a';
        const response:AudioVisualContent[] = [{
          name:'Avatar',
          description:'test',
          gender:'',
          imageurl:'',
          releaseYear:''
        }];
        let result:AudioVisualContent[];
        mockContentService.findItems.and.returnValues(response);
        result = presenter.onkeyPressItemsTofindEVent(itemsToFind);
  
        expect(result.length).toBeGreaterThan(0);
      });
    });
  });
  