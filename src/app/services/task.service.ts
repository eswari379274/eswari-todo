import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from 'src/app/classes/task';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
public taskUrl = 'api/tasks';  // URL to web api	 

constructor(private http: HttpClient) { 
}

getTasks (): Observable<Task[]> {
return this.http.get<Task[]>(this.taskUrl)
  .pipe(
    tap(tasks => this.log(`fetched tasks`)),
    catchError(this.handleError('getTasks', []))
  );
}

private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.error(message);
  }
}
