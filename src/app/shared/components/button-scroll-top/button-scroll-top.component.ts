import { Component } from '@angular/core';

@Component({
  selector: 'csv-button-scroll-top',
  templateUrl: './button-scroll-top.component.html',
  styleUrls: ['./button-scroll-top.component.scss']
})
export class ButtonScrollTopComponent {

  scrollTopZero():void {
    window.scrollTo(0, 0)
  }

}
