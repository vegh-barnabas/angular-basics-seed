import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-single',
  template: `<donut-form
    [donut]="donut"
    (create)="onCreate($event)"
  ></donut-form>`,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  ngOnInit(): void {
    this.donut = {
      id: 'a8mbk4',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 119,
      description: 'For the chocolate lover',
      promo: 'new',
    };
  }

  onCreate(donut: Donut) {
    console.log('donut form sent', donut);
  }
}
