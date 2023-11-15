import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { NotificationComponent } from './notification/notification.component';
import { EventAlertComponent } from './event-alert/event-alert.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import {ToastrModule} from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  { path: 'notifications', component: NotificationComponent },
  { path: 'event-alert', component: EventAlertComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'books-list', component: BooksListComponent },
  { path: 'edit-book/:id', component: BookDetailComponent }, 
  { path: 'event-list', component: EventListComponent  },
  { path: 'add-event', component: AddEventComponent  },
];

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookDetailComponent,
    BooksListComponent,
    NotificationComponent,
    EventAlertComponent,
    AddEventComponent,
    EventDetailComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
