import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modul';
  constructor(private taskService: TaskService) {}

  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  getTask() {
    this.taskService.getTask('4')
    .subscribe(task => {
      console.log(task);
    });
  }
  createTask() {
    const task = {
      userId: '220',
      title: 'change title 2',
      completed: true
    };
    this.taskService.createTask(task)
    .subscribe((newTask) => {
      console.log(newTask);
    });
  }






  getAllUsers() {
    this.taskService.getAllUsers()
    .subscribe(users => {
      console.log(users);
    });
  }

  getUser() {
    this.taskService.getUser('4')
    .subscribe(user => {
      console.log(user);
    });
  }
}
