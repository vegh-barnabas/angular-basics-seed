import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div *ngFor="let donut of donuts">
      <donut-card [donut]="donut" class="donut-card"></donut-card>
    </div>
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
      },
      {
        id: 'bk48bm',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection',
      },
      {
        id: 'bk48bm',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel',
      },
    ];

    this.donut = this.donuts[2];
  }
}
