import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-single',
  template: `<donut-form
    [donut]="donut"
    (create)="onCreate($event)"
    (update)="onUpdate($event)"
    (delete)="onDelete($event)"
  ></donut-form>`,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    const id = '96km45';
    this.donutService
      .readOne(id)
      .subscribe((donut: Donut) => (this.donut = donut));
  }

  onCreate(donut: Donut) {
    // Needs a subscription, without that the Observable doesn't execute
    this.donutService
      .create(donut)
      .subscribe((donut) => console.log('Donut created', donut));
  }

  onUpdate(donut: Donut) {
    this.donutService
      .update(donut)
      .subscribe((donut) => console.log('Donut updated', donut));
  }

  onDelete(donut: Donut) {
    this.donutService.delete(donut);
  }
}
