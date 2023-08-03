import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { TypeKeyboardEvent } from '../../enums/event-keyboard.enum';
import { AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'csv-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit {
  @Output() clickedDeleteItemEVent = new EventEmitter<void>();

  @Output() keyBackSpaceorDeleteEvent = new EventEmitter<string>();

  @Output() keyPressItemsTofindEVent = new EventEmitter<string>();

  @Input() showSkeleton = false;

  form = this.fb.group(
    {
      itemToFind:['']
    }
  );

  constructor(private renderer: Renderer2,private fb:FormBuilder, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  onClicked():void {
    this.clearTextInput();
    this.focusControl();
    this.clickedDeleteItemEVent.emit();
  }

  onkeyBackSpaceorDeleteEvent(event:KeyboardEvent):void {
    const { code }= event;
    this.onValidatekeyBackSpaceorDeleteEvent(code as TypeKeyboardEvent);
  }

  private onValidatekeyBackSpaceorDeleteEvent(code:TypeKeyboardEvent):void {
    if (code === TypeKeyboardEvent.BackSpace){
      this.emitKeyBackSpaceorDeleteEvent(TypeKeyboardEvent.BackSpace);
      return;
    }

    if (code === TypeKeyboardEvent.Delete) {
      this.emitKeyBackSpaceorDeleteEvent(TypeKeyboardEvent.Delete);
      return;
    }
  }

  private emitKeyBackSpaceorDeleteEvent(keyName:string):void {
    this.keyBackSpaceorDeleteEvent.emit(keyName);
  }

  private getControl(controlName:string): AbstractControl|null {
    return this.form?.get(controlName);
  }

  private focusControl():void {
    const inputElement = this.elementRef.nativeElement.querySelector('#search');
    this.renderer.selectRootElement(inputElement).focus();
  }

  private clearTextInput():void {
    this.getControl('itemToFind')?.setValue('');
  }

  private getControlValue(controlName:string):string{  
    return this.form?.get(controlName)?.value as string;
  }

  OnInputEvent():void {
    const itemTofind = this.getControlValue('itemToFind');
    this.keyPressItemsTofindEVent.emit(itemTofind as string);
  }
}
