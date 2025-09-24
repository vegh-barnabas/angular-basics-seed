import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutListComponent } from './admin/containers/donut-list/donut-list.component';

@NgModule({
  declarations: [AppComponent, DonutListComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  exports: [DonutListComponent],
})
export class AppModule {}
