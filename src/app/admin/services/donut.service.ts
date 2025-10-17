import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { tap, of, map, catchError, throwError, retry, timer } from 'rxjs';

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
  }

  readOne(id: string) {
    return this.read().pipe(
      map((donuts) => {
        const donut = donuts.find((donut) => donut.id === id);

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
      })
    );
  }

  create(payload: Donut) {
    return this.http
      .post<Donut>('/api/donuts', payload)
      .pipe(tap((donut) => (this.donuts = [...this.donuts, donut])));
  }

  update(payload: Donut) {
    return this.http.put<Donut>(`/api/donuts/${payload.id}`, payload).pipe(
      tap((donut) => {
        this.donuts = this.donuts.map((item: Donut) => {
          if (item.id === donut.id) {
            return donut;
          }

          return item;
        });
      }),
      retry({ count: 2, delay: () => timer(1000) }),
      catchError((error) => this.handleError(error))
    );
  }

  delete(payload: Donut) {
    return this.http.delete<Donut>(`api/donuts/${payload.id}`).pipe(
      tap(() => {
        this.donuts = this.donuts.filter((donut) => donut.id !== payload.id);
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client side
      console.warn('Client error', error.message);
    } else {
      // Server side
      console.warn('Server error', error.status);
    }

    return throwError(() => new Error(error.message));
  }
}
