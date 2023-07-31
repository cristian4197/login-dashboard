import { FormUser } from 'src/app/core/interface/form-user.interface';
import { LoginComponent } from './login.component';
import { LoginPresenter } from './login.presenter';
import { Router } from '@angular/router';
import { fakeAsync, tick } from '@angular/core/testing';

describe('@LoginComponent', () => {
  let component: LoginComponent;
  let mockpresenter: jasmine.SpyObj<LoginPresenter> = jasmine.createSpyObj('LoginPresenter',['validateLogin']);
  let mockRouter: jasmine.SpyObj<Router> = jasmine.createSpyObj('Router',['navigate']);

  beforeEach(() => {
    component = new LoginComponent(mockpresenter, mockRouter);
  });

  describe('When login is validte', ()=>{
    it('#Should navigate to home',fakeAsync(() => {

      const user:FormUser = {
        user:'csv',
        password:'123'
      };
      mockpresenter.validateLogin.and.returnValue(true);

      component.onEmitFor(user);
      tick(500);

      expect(mockRouter.navigate).toHaveBeenCalledWith(['home']);
    }));

    it('#Should close loader',() => {
      const user:FormUser = {
        user:'csv',
        password:'123'
      };
      mockpresenter.validateLogin.and.returnValue(false);

      component.onEmitFor(user);

      expect(component.openLoader).toBeFalse();
    });
  });
});
