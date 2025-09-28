import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-single',
  template: `<donut-form (create)="onCreate($event)"></donut-form>`,
  styles: [],
})
export class DonutSingleComponent {
  onCreate(donut: Donut) {
    console.log('donut form sent', donut);
  }
}
