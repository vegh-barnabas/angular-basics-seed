import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-list',
  template: `
    <ng-container *ngIf="donuts.length > 0; else emptyList">
      <div *ngFor="let donut of donuts; trackBy: trackById">
        <donut-card [donut]="donut" class="donut-card"></donut-card>
      </div>
    </ng-container>
    <ng-template #emptyList>
      <div>List is empty!</div>
    </ng-template>
  `,
  styles: [``],
})
export class DonutListComponent {
  donuts!: Donut[];
  donut!: Donut;

  constructor(private donutService: DonutService) {
    this.donuts = this.donutService.donuts;
    this.donut = this.donuts[2];
  }

  trackById(index: number, item: Donut): string {
    return item.id;
  }
}
