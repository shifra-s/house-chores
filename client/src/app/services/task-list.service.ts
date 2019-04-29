import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private httpClient: HttpClient) { }

  //get tasks
  get(): Observable<Task> {
    return this.httpClient.get<Task>('http://localhost:8888/tasklist')
  }

  //post task  
  post(task: Task): Observable<Task> {
    return this.httpClient.post<Task>('http://localhost:8888/addtask', task)
  }

}
