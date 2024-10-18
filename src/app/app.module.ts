import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCompletedComponent } from './components/todo-completed/todo-completed.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavbarComponent } from './main-component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoCompletedComponent,
    UserListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
