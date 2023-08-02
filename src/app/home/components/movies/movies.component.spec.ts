import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { MoviesComponent } from './movies.component';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';
import { MoviesPresenter } from './movies.presenter';
import { of } from 'rxjs';

describe('@MoviesComponent', () => {
  let component: MoviesComponent;
  let mockMoviesPresenter: jasmine.SpyObj<MoviesPresenter> = jasmine.createSpyObj('MoviesPresenter',['copyOriginalListValues','run','copyOriginalListValues','onkeyPressItemsTofindEVent'],{
    viewState$:of({
      state:'loaded',
      payload:{
        showSkeleton:false
      }
    })
  });

  beforeEach(() => {
    component = new  MoviesComponent(mockMoviesPresenter);
  });

  describe('When ngOnInit is called', () =>{
    it('#Should listMovies length is greater than zero', () => {
      const response:AudioVisualContent[] = [{
        name:'Avatar',
        description:'test',
        gender:'',
        imageurl:'',
        releaseYear:''
      }];
      mockMoviesPresenter.copyOriginalListValues.and.returnValues(response);
      component.ngOnInit();
      expect(component.listMovies.length).toBeGreaterThan(0);
    });
  });


  describe('When click event is active', () => {
    it('#Should call onClickedDeleteItemEVent', () => {
      const response:AudioVisualContent[] = [{
        name:'Avatar',
        description:'test',
        gender:'',
        imageurl:'',
        releaseYear:''
      }];
      mockMoviesPresenter.copyOriginalListValues.and.returnValues(response);
      component.onClickedDeleteItemEVent();
      expect(component.listMovies.length).toBeGreaterThan(0);
    });
  });

  describe('When keyPress event is active',() => {
    it('#Should call onKeyBackSpaceorDeleteEvent', () => {
      const itemsToFind = TypeKeyboardEvent.BackSpace;
      const response:AudioVisualContent[] = [{
        name:'Avatar',
        description:'test',
        gender:'',
        imageurl:'',
        releaseYear:''
      }];
      mockMoviesPresenter.copyOriginalListValues.and.returnValues(response);
      component.onKeyBackSpaceorDeleteEvent(itemsToFind);
      expect(component.listMovies.length).toBeGreaterThan(0);

    })
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
      mockMoviesPresenter.onkeyPressItemsTofindEVent.and.returnValues(response);
      component.onkeyPressItemsTofindEVent(itemsToFind);

      expect(component.listMovies.length).toBeGreaterThan(0);
    });
  });

  describe('When ngOnDestroy is called', () => {
    it('#Should call unsubscribe', () => {
      component['viewStateSub'] = of().subscribe();
      const spy = spyOn(component['viewStateSub'],'unsubscribe');

      component.ngOnDestroy();

      expect(spy).toHaveBeenCalled();
    });
  });
});
