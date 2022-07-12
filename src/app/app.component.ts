import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html',
  template: `
  <app-customers></app-customers>
  `
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string | undefined;
constructor() {

}
  ngOnInit() {
this.title = '123';
  }


}
