import { fakeAsync, tick } from '@angular/core/testing';
import { InfoHomeComponent } from './info-home.component';

describe('@InfoHomeComponent', () => {
  let component: InfoHomeComponent;

  beforeEach(() => {
    component = new InfoHomeComponent();
  });

  describe('When ngOninit is called', () => {
    it('#Should length of listHome is greater than zero',fakeAsync(() => {
      component.ngOnInit();
      tick(500);
      expect(component.listHome.length).toBeGreaterThan(0);
    }));
  });
});
