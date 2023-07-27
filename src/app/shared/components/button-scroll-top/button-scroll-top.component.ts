import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'csv-button-scroll-top',
  templateUrl: './button-scroll-top.component.html',
  styleUrls: ['./button-scroll-top.component.scss']
})
export class ButtonScrollTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTopZero():void {
    console.log("Se hizo Click");
    window.scroll({
      top: 0
    });
    
  }

}
