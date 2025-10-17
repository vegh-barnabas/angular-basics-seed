import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'donut-single',
  template: `<donut-form
    [donut]="donut"
    [isEdit]="isEdit"
    (create)="onCreate($event)"
    (update)="onUpdate($event)"
    (delete)="onDelete($event)"
  ></donut-form>`,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  isEdit!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private donutService: DonutService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.isEdit = this.route.snapshot.data.isEdit;

    this.donutService
      .readOne(id)
      .subscribe((donut: Donut) => (this.donut = donut));
  }

  onCreate(donut: Donut) {
    // Needs a subscription, without that the Observable doesn't execute
    this.donutService
      .create(donut)
      .subscribe((donut) =>
        this.router.navigate(['admin', 'donuts', donut.id])
      );
  }

  onUpdate(donut: Donut) {
    this.donutService.update(donut).subscribe({
      next: (donut: Donut) => this.router.navigate(['admin']),
      error: (error) => console.log('Update error', error),
    });
  }

  onDelete(donut: Donut) {
    this.donutService
      .delete(donut)
      .subscribe(() => this.router.navigate(['admin']));
  }
}
