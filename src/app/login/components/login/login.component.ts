import { Component } from '@angular/core';
import { LoginPresenter } from './login.presenter';
import { FormUser } from 'src/app/core/interface/form-user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginPresenter]
})
export class LoginComponent {
  openLoader = false;
  constructor(private presenter:LoginPresenter) {

  }
  onEmitFor(form:FormUser):void {
    console.log(form);
    const response = this.presenter.validateLogin(form);
    if (response){
      this.openLoader = true;
    }else {
      this.openLoader = false;      
    }
    
  }

}
