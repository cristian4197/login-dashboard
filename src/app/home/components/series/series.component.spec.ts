import { SeriesComponent } from './series.component';
import { ContentService } from '../../services/content.service';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { TypeKeyboardEvent } from 'src/app/shared/enums/event-keyboard.enum';


describe('@SeriesComponent', () => {
  let component: SeriesComponent;
  let mockContentService: jasmine.SpyObj<ContentService> = jasmine.createSpyObj('ContentService',['findItems','copyListOriginal']);

  beforeEach(() => {
    component = new  SeriesComponent(mockContentService);
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
      mockContentService.copyListOriginal.and.returnValues(response);
      component.ngOnInit();
      expect(component.listSeries.length).toBeGreaterThan(0);
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
      mockContentService.copyListOriginal.and.returnValues(response);
      component.onClickedDeleteItemEVent();
      expect(component.listSeries.length).toBeGreaterThan(0);
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
      mockContentService.copyListOriginal.and.returnValues(response);
      component.onKeyBackSpaceorDeleteEvent(itemsToFind);
      expect(component.listSeries.length).toBeGreaterThan(0);

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
      mockContentService.findItems.and.returnValues(response);
      component.onkeyPressItemsTofindEVent(itemsToFind);

      expect(component.listSeries.length).toBeGreaterThan(0);
    });
  });
});

