import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-list',
  template: `
    <div class="donut-list-actions">
      <a routerLink="new" class="btn btn--green">
        New Donut
        <img src="assets/img/icon/plus.svg" />
      </a>
    </div>

    <ng-container *ngIf="donuts.length > 0; else emptyList">
      <div *ngFor="let donut of donuts; trackBy: trackById">
        <donut-card [donut]="donut" class="donut-card"></donut-card>
      </div>
    </ng-container>
    <ng-template #emptyList>
      <div>List is empty!</div>
    </ng-template>
  `,
  styles: [
    `
      .donut-list {
        &-actions {
          margin-bottom: 10px;
        }
      }
    `,
  ],
})
export class DonutListComponent {
  donuts: Donut[] = [];

  constructor(private donutService: DonutService) {
    this.donutService
      .read()
      .subscribe((donuts: Donut[]) => (this.donuts = donuts));
  }

  trackById(index: number, item: Donut): string {
    return item.id;
  }
}
