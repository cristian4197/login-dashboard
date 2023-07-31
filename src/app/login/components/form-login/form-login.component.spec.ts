import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormLoginComponent } from './form-login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('@FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoginComponent ],
      imports:[
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When validate login',()=> {
    it('#Should emit emitForm', () => {
      const spy = spyOn(component.emitForm, 'emit');
      spyOnProperty(component.form,'valid').and.returnValue(true);

      component.validateLogin();

      expect(spy).toHaveBeenCalled();
    });
  });
});
