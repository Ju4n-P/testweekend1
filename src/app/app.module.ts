import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovementDirective } from './directives/movement.directive';
import { BookPreviewComponent } from './book-preview/book-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    MovementDirective,
    BookPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
