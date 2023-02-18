import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RespondInterceptor } from './core/interceptors/respond.interceptor';
import { RequestInterceptor } from './core/interceptors/request.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RespondInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
