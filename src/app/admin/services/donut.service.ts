import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, of } from 'rxjs';

import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  donuts: Donut[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.donuts.length > 0) {
      return of(this.donuts);
    }

    return this.http
      .get<Donut[]>('/api/donuts')
      .pipe(tap((donuts) => (this.donuts = donuts)));

    // return this.donuts;ä
  }

  // readOne(id: string) {
  //   const donut = this.donuts.find((donut) => donut.id === id);

  //   if (donut) {
  //     return donut;
  //   }

  //   return {
  //     id: '',
  //     name: '',
  //     icon: '',
  //     price: 0,
  //     description: '',
  //   };
  // }

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
