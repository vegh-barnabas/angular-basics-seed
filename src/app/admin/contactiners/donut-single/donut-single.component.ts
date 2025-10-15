import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

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

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    const id = 'a8mbk4';
    this.donut = this.donutService.donuts.find((donut) => donut.id === id) || {
      id: '',
      name: '',
      icon: '',
      price: 0,
      description: '',
    };
  }

  onCreate(donut: Donut) {
    console.log('donut form sent', donut);
  }
}
