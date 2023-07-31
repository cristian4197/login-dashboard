import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContentComponent } from './search-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ElementRef, Renderer2 } from '@angular/core';

describe('@SearchContentComponent', () => {
  let component: SearchContentComponent;
  let fixture: ComponentFixture<SearchContentComponent>;
  let mockElementRef = {
    nativeElement: {
      querySelector: jasmine.createSpy('querySelector')
    }
  };

  let mockRenderer: jasmine.SpyObj<Renderer2> = jasmine.createSpyObj('Renderer2',['selectRootElement']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchContentComponent ],
      imports: [
        ReactiveFormsModule
      ],
      providers:[
        {provide: ElementRef, useValue:mockElementRef},
        {provide: Renderer2, useValue:mockRenderer}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When clicked is called', ()=> {
    it('#Should emit clickedDeleteItemEVent', () => {
      spyOn(component.clickedDeleteItemEVent,'emit');
      
      component.onClicked();

      expect(component.clickedDeleteItemEVent.emit).toHaveBeenCalled();
    });
  });

  describe('When keydown event is active', () => {
    it('#Should call onkeyBackSpaceorDeleteEvent when event code is Backspace', ()=>{
      spyOn(component.keyBackSpaceorDeleteEvent,'emit');
      const mockEvent = {
        code:'Backspace'
      } as KeyboardEvent;

      component.onkeyBackSpaceorDeleteEvent(mockEvent);

      expect(component.keyBackSpaceorDeleteEvent.emit).toHaveBeenCalled();
    });

    it('#Should call onkeyBackSpaceorDeleteEvent when event code is Delete', ()=>{
      spyOn(component.keyBackSpaceorDeleteEvent,'emit');
      const mockEvent = {
        code:'Delete'
      } as KeyboardEvent;

      component.onkeyBackSpaceorDeleteEvent(mockEvent);

      expect(component.keyBackSpaceorDeleteEvent.emit).toHaveBeenCalled();
    });
  });

  describe('When input event is active', () => {
    it('#Should emit keyPressItemsTofindEVent', () => {
      spyOn(component.keyPressItemsTofindEVent,'emit');
      const testValue = 'test';
      component.form.controls['itemToFind'].setValue(testValue);

      component.OnInputEvent();

      expect(component.keyPressItemsTofindEVent.emit).toHaveBeenCalled();
    });
  });
});
