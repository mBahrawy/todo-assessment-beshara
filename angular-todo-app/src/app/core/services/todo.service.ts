import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from "../interfaces/Todo"
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpService: HttpService) { }

  getTodos ():  Observable<unknown>{
    return this.httpService.getRequest("/todos/")
  }

  deleteTodo(todo: Todo) : Observable<unknown>{
    return this.httpService.deleteRequest(`/todos/${todo.id}`);
  }

  toggleTodo(todo: Todo) : Observable<unknown> {
    return this.httpService.putRequest(`/todos/${todo.id}`, todo);
  }

  addTodo(todo: Todo) : Observable<unknown> {
    return this.httpService.postRequest(`/todos/`, todo);
  }

}
