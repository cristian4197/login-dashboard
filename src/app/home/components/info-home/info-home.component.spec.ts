import { InfoHomeComponent } from './info-home.component';

describe('@InfoHomeComponent', () => {
  let component: InfoHomeComponent;

  beforeEach(() => {
    component = new InfoHomeComponent();
  });

  describe('When ngOninit is called', () => {
    it('#Should length of listHome is greater than zero',() => {
      component.ngOnInit();

      expect(component.listHome.length).toBeGreaterThan(0);
    });
  });
});
