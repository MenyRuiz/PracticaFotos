import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }
  getAllTasks() {
    const path = `${this.api}/todos/`;
    return this.http.get<Task[]>(path);
  }
  getTask(id: string) {
    const path = `${this.api}/todos/${id}`;
    return this.http.get<Task>(path);
  }

  createTask(task: Task) {
    const path = `${this.api}/todos`;
    return this.http.post(path, task);
  }



  getAllUsers() {
    const path = `${this.api}/users/`;
    return this.http.get<Task[]>(path);
  }
  getUser(id: string) {
    const path = `${this.api}/users/${id}`;
    return this.http.get<Task>(path);
  }

  createUser(task: Task) {
    const path = `${this.api}/users`;
    return this.http.post(path, task);
  }
}
