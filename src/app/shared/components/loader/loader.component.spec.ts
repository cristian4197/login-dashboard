import { LoaderComponent } from './loader.component';

describe('@LoaderComponent', () => {
  let component: LoaderComponent;

  beforeEach(() => {
    component = new LoaderComponent();
  });

  describe('When component is initialized', () => {
    it('#Should set true to showViewLoader', () => {
      component.openLoader = true;

      expect(component.showViewLoader).toBeTrue();
    });

    it('#Should set false to showViewLoader', () => {
      component.openLoader = false;

      expect(component.showViewLoader).toBeFalse();
    });
  });
});
