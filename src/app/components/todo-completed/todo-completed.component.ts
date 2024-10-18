import { Component } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrl: './todo-completed.component.scss'
})
export class TodoCompletedComponent {
  completedTodos: ITodo[] = [];

  constructor(private todoService: TodoService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getCompletedTodos();
  }

  getCompletedTodos(): void {

    this.completedTodos = this.todoService.getTodos().filter(todo => todo.completed);
  }
  getAuthorName(userId: number): string {

    return this.userService.getUserName(userId);
  }
}

