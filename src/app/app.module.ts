import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutListComponent } from './admin/containers/donut-list/donut-list.component';
import { DonutCardComponent } from './admin/components/donut-card/donut-card.component';

@NgModule({
  declarations: [AppComponent, DonutListComponent, DonutCardComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  exports: [DonutListComponent],
})
export class AppModule {}
