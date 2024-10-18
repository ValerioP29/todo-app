import { ITodo } from './../../interfaces/i-todo';
import { TodoService } from './../../services/todo.service';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  todos: ITodo[] = [];

  constructor (
    private todoService: TodoService,
    private userService: UserService
  ){}
ngOnInit(): void {
  this.todos= this.todoService.getTodos();

}

getAuthorName (userId: number): string {
  return this.userService.getUserName(userId);
}
updateTodoStatus(todoId: number, event: Event): void {
  const isChecked = (event.target as HTMLInputElement).checked;
  this.todoService.updateTodos(todoId, isChecked);
}
searchTerm: string = '';

getFilteredTodos(): ITodo[] {
  return this.todos.filter(todo => {
    const author = this.getAuthorName(todo.userId)?.toLowerCase() || '';
    return author.includes(this.searchTerm.toLowerCase());
  });
}
}

