import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  donuts: Donut[] = [
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
    },
    {
      id: 'bk48bm',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'Chocolate drizzled with caramel',
      promo: 'limited',
    },
    {
      id: '96km45',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 159,
      description: 'For the sour advocate',
    },
    {
      id: 'mgk75l',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 139,
      description: 'Delicious lucious lemon',
      promo: 'limited',
    },
  ];

  constructor() {}

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.donuts.find((donut) => donut.id === id);

    if (donut) {
      return donut;
    }

    return {
      id: '',
      name: '',
      icon: '',
      price: 0,
      description: '',
    };
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log(this.donuts);
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut) => {
      if (donut.id === payload.id) {
        return payload;
      }

      return donut;
    });

    console.log('updated', this.donuts);
  }

  delete(payload: Donut) {
    this.donuts = this.donuts.filter((donut) => donut.id !== payload.id);
    console.log('deleted', this.donuts);
  }
}
