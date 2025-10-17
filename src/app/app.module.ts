import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';

import { DonutListComponent } from './admin/containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './admin/contactiners/donut-single/donut-single.component';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'donuts', pathMatch: 'full' },
      { path: 'donuts', component: DonutListComponent },
      { path: 'donut', component: DonutSingleComponent },
    ],
  },
  { path: '**', redirectTo: 'admin' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), AdminModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
