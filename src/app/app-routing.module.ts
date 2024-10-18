import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCompletedComponent } from './components/todo-completed/todo-completed.component';
import { UserListComponent } from './components/user-list/user-list.component';
const routes: Routes = [
  { path: "", component: TodoListComponent},
  { path: "completed", component: TodoCompletedComponent},
  { path: "users", component: UserListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
