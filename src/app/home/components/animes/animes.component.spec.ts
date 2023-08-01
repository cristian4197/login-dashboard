import { AnimesComponent } from './animes.component';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';
import { AnimesPresenter } from './animes.presenter';

describe('@AnimesComponent', () => {
  let component: AnimesComponent;
  let mockSeriesPresenter: jasmine.SpyObj<AnimesPresenter> = jasmine.createSpyObj('MoviesPresenter',['copyOriginalListValues','run','copyOriginalListValues','onkeyPressItemsTofindEVent']);

  beforeEach(() => {
    component = new  AnimesComponent(mockSeriesPresenter);
  });

  describe('When ngOnInit is called', () =>{
    it('#Should listSeries length is greater than zero', () => {
      const response:AudioVisualContent[] = [{
        name:'Avatar',
        description:'test',
        gender:'',
        imageurl:'',
        releaseYear:''
      }];
      mockSeriesPresenter.copyOriginalListValues.and.returnValues(response);
      component.ngOnInit();
      expect(component.listAnimes.length).toBeGreaterThan(0);
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
      mockSeriesPresenter.copyOriginalListValues.and.returnValues(response);
      component.onClickedDeleteItemEVent();
      expect(component.listAnimes.length).toBeGreaterThan(0);
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
      mockSeriesPresenter.copyOriginalListValues.and.returnValues(response);
      component.onKeyBackSpaceorDeleteEvent(itemsToFind);
      expect(component.listAnimes.length).toBeGreaterThan(0);

    })
  });

  describe('When onkeyPressItemsTofindEVent is called',() => {
    it('#Should listSeries length is greater than zero',() => {
      const itemsToFind = 'a';
      const response:AudioVisualContent[] = [{
        name:'Avatar',
        description:'test',
        gender:'',
        imageurl:'',
        releaseYear:''
      }];
      mockSeriesPresenter.onkeyPressItemsTofindEVent.and.returnValues(response);
      component.onkeyPressItemsTofindEVent(itemsToFind);

      expect(component.listAnimes.length).toBeGreaterThan(0);
    });
  });
});
