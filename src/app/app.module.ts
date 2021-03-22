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
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './@shared/header/header.component';
import { JokeListComponent } from './joke/joke-list/joke-list.component';
import { JokeFormComponent } from './joke/joke-form/joke-form.component';
import { JokeComponent } from './joke/joke/joke.component';
import { UserComponent } from './user/user.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    MovementDirective,
    BookPreviewComponent,
    SizerComponent,
    GetCharPipe,
    TruncatePipe,
    NotfoundComponent,
    HeaderComponent,
    JokeListComponent,
    JokeFormComponent,
    JokeComponent,
    UserComponent,
    ObservableComponent,

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
