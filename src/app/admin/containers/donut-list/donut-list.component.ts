import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

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
export class DonutListComponent implements OnInit {
  donuts!: Donut[];
  donut!: Donut;

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'a8mbk4',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the chocolate lover',
        promo: 'new',
      },
      {
        id: 'bk48bm',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection',
        promo: 'limited',
      },
      {
        id: 'bk48bm',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel',
      },
    ];
    // this.donuts = [];

    this.donut = this.donuts[2];
  }

  trackById(index: number, item: Donut): string {
    return item.id;
  }
}
