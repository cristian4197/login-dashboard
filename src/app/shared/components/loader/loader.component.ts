import { Component, Input } from '@angular/core';

@Component({
  selector: 'csv-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  showViewLoader = false;

  @Input()
  set openLoader(value:boolean) {    
    if(value) {
      this.showLoader();
    }else {
      this.hiddeLoader();
    }
  }
  constructor() { }

  showLoader():void {
    this.showViewLoader = true;
  }

  hiddeLoader():void {
    this.showViewLoader = false;
  }

}
