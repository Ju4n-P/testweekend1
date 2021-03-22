import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { JokeListComponent } from './joke/joke-list/joke-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ObservableComponent } from './observable/observable.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'observable', component: ObservableComponent},
  {path: "users", component: UserComponent},
  {path: "jokes", component: JokeListComponent},
  {path: "404", component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
