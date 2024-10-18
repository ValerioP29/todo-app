import { IUser } from './../../interfaces/i-user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
users: IUser[] = [];
todos: ITodo[] = [];

constructor(private userService: UserService, private todoService: TodoService) {}

ngOnInit(): void {
  this.getUsersWithTodos();
}

getUsersWithTodos(): void {

  this.users = this.userService.getUsers();
  this.todos = this.todoService.getTodos();
}

getTodosByUser(userId: number): ITodo[] {

  return this.todos.filter(todo => todo.userId === userId);
}
}
