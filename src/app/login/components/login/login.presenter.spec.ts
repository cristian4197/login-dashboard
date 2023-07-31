
import { FormUser } from 'src/app/core/interface/form-user.interface';
import { LoginPresenter } from './login.presenter';

describe('@LoginPresenter', () => {
  let presenter: LoginPresenter;

  beforeEach(() => {
    presenter = new LoginPresenter();
  });

    describe('When login is validate', ()=> {
        it('#Should return true when session is valid', ()=> {
            const user:FormUser = {
                user:'csv',
                password:'123'
            };
            let result;
            result = presenter.validateLogin(user);

            expect(result).toBeTrue();
        });

        it('#Should return false when session is invalid', ()=> {
            const user:FormUser = {
                user:'csv2',
                password:'1234'
            };

            let result;
            result = presenter.validateLogin(user);

            expect(result).toBeFalse();
        });
    });
});
