import { fakeAsync, tick } from "@angular/core/testing";
import { ContentService } from "../../services/content.service";
import { ViewState } from "src/app/core/enums/view-state-app.enum";
import { AudioVisualContent } from "src/app/core/interface/audio-visual.inteface";
import { SeriesPresenter } from "./series.presenter";

describe('@SeriesPresenter', () => {
    let presenter: SeriesPresenter;
    let mockContentService: jasmine.SpyObj<ContentService> = jasmine.createSpyObj('ContentService',['findItems','copyListOriginal','filterItemsToName','findMatchesOnNameCharacters']);
  
    beforeEach(() => {
        presenter = new SeriesPresenter(mockContentService);
    });
  
    describe('When run is called', () =>{
      it('#Should listMovies length is greater than zero',fakeAsync(() => {
       presenter.run();
       tick(500);
        let result = '';
        presenter.viewState$.subscribe((response)=>{
            result = response.state
        });
       expect(result).toBe(ViewState.Loaded);
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
  