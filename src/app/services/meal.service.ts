import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, retryWhen, take, throwError } from 'rxjs';

const TEST_API_URL = '/api/test';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}

  getTestData() {
    return this.http.get<any>(TEST_API_URL).pipe(
      retryWhen((errors) => errors.pipe(delay(5000), take(2))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      // client-side
      console.warn('Client', err.message);
    } else {
      // server-side
      console.warn('Server', err.status);
    }
    return throwError(() => new Error(err.message));
  }
}
