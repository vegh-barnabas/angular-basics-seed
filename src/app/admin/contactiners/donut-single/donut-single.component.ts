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
    const id = 'a8mbk4';
    this.donutService
      .readOne(id)
      .subscribe((donut: Donut) => (this.donut = donut));
  }

  onCreate(donut: Donut) {
    this.donutService.create(donut);
  }

  onUpdate(donut: Donut) {
    this.donutService.update(donut);
  }

  onDelete(donut: Donut) {
    this.donutService.delete(donut);
  }
}
