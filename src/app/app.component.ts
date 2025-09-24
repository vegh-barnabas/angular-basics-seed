import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <donut-list></donut-list>
    </div>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('Hello World!');
  }
}
