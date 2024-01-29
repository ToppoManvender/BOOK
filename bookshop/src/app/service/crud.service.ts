import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { environment } from './environment.local';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private REST_API: string = environment.apiUrlBook;
  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private httpClient: HttpClient,
    private oidcSecurityService: OidcSecurityService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this.oidcSecurityService.getIdToken();
    return this.httpHeaders.append('Authorization', `Bearer ${token}`);
  }

  getBookAvailability(): Observable<any> {
    const apiUrl = `${this.REST_API}/books/availability`;
    const headers = this.getHeaders();

    return this.httpClient.get(apiUrl, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  addBook(data: Book): Observable<any> {
    const API_URL = `${this.REST_API}/add-book`;
    const headers = this.getHeaders();

    return this.httpClient.post(API_URL, data, { headers }).pipe(catchError(this.handleError));
  }

  getBooks(): Observable<any> {
    const apiUrl = `${this.REST_API}`;
    const headers = this.getHeaders();

    return this.httpClient.get(apiUrl, { headers }).pipe(catchError(this.handleError));
  }

  getBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-book/${id}`;
    const headers = this.getHeaders();

    return this.httpClient.get(API_URL, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  updateBook(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-book/${id}`;
    const headers = this.getHeaders();

    return this.httpClient.put(API_URL, data, { headers }).pipe(catchError(this.handleError));
  }

  deleteBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-book/${id}`;
    const headers = this.getHeaders();

    return this.httpClient.delete(API_URL, { headers }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
