import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormUser } from 'src/app/core/interface/form-user.interface';

@Component({
  selector: 'csv-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  @Output() emitForm = new EventEmitter<FormUser>();

  form = this.fb.group(
    {
      user:['', Validators.required],
      password:['',Validators.required]
    }
  );

  constructor(private readonly fb:FormBuilder) { }

  validateLogin():void {
    if (this.form.valid) {
      this.emitForm.emit(this.form.value as FormUser)
    }
  }
}
