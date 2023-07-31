import { ButtonScrollTopComponent } from './button-scroll-top.component';

describe('@ButtonScrollTopComponent', () => {
  let component: ButtonScrollTopComponent;
  
  beforeEach(() => {
    component = new ButtonScrollTopComponent();
  });

 describe('When component is iniatialized', () => {
  it('#Should set top zero', () => {
   const spy = spyOn(window,'scrollTo');

    component.scrollTopZero();

    expect(spy).toHaveBeenCalledWith(0,0);
  });
 });
});
