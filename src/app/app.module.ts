import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovementDirective } from './directives/movement.directive';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { SizerComponent } from './sizer/sizer.component';
import { FormsModule } from '@angular/forms';
import { GetCharPipe } from './pipe/get-char.pipe';
import { TruncatePipe } from './pipe/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovementDirective,
    BookPreviewComponent,
    SizerComponent,
    GetCharPipe,
    TruncatePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
