import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AdminModule],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
