import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/i-todo';
import { TODOS } from '../data/todos';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo[]= TODOS;

getTodos(): ITodo[] {
 return this.todos;
}

getCompletedTodos(): ITodo[] {
  return this.todos.filter(todo => todo.completed);
}
updateTodos(id: number, completed: boolean): void{
  const todo = this.todos.find(todo => todo.id===id);
  if (todo) {
    todo.completed= completed;
  }
}
}
