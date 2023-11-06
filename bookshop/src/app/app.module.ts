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

const appRoutes: Routes = [
  { path: 'notifications', component: NotificationComponent },
  { path: 'event-alert', component: EventAlertComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'books-list', component: BooksListComponent },
  { path: 'edit-book/:id', component: BookDetailComponent }, 
  // Define other routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookDetailComponent,
    BooksListComponent,
    NotificationComponent,
    EventAlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // Add this line for routing
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
