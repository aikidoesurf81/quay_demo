import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApisService {


  // Base url
  baseurl = 'https://exk80kr9k5.execute-api.us-west-2.amazonaws.com/status';
  
  constructor(
    private http: HttpClient
  ) {}

   // Http Headers
   
   httpOptions = {
    headers: new HttpHeaders({
      'Accepts': 'application/json',
      'Content-Type': 'application/json'
    })  
  }
  
  // GET Cards
  GetCards(): Observable<any> {
    return this.http.get<any>(this.baseurl)
    .pipe(
      retry(1),
      catchError(this.errorHandl),
    )
  }


  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}