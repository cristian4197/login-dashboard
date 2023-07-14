import { Component } from '@angular/core';
import { LoginPresenter } from './login.presenter';
import { FormUser } from 'src/app/core/interface/form-user.interface';
import { Router } from '@angular/router';
import { take, timer } from 'rxjs';

@Component({
  selector: 'csv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginPresenter]
})
export class LoginComponent {
  openLoader = false;

  constructor(private presenter:LoginPresenter, private router:Router) { }

  onEmitFor(form:FormUser):void {
    const isSessionValid = this.presenter.validateLogin(form);
    if (isSessionValid){
      this.openLoader = true;
      this.goToHomeView();
    }else {
      this.openLoader = false;      
    } 
  }

  private goToHomeView():void {
    timer(500).pipe(take(1)).subscribe(()=>{
        this.router.navigate(['home']);
      }
    );
  }
}
