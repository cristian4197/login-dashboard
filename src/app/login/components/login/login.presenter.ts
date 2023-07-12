import { FormUser } from "src/app/core/interface/form-user.interface";

export class LoginPresenter {
    validateLogin(form:FormUser):boolean {
        const { user, password} = form;
        if(user==='csv' && password==='123') return true;
        return false;
    }
}