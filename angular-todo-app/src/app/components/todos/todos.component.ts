import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/core/interfaces/Todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {

  todos: Todo[] = [];
  subscription: Subscription | undefined;


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.subscription = this.todoService.getTodos().subscribe((todos)=>
    this.todos = todos as Todo[]);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  deleteTodo(todo: Todo) : void {
    this.todoService
      .deleteTodo(todo)
      .subscribe(
          ()=> this.todos = this.todos.filter(t => t.id !== todo.id));
  }

  toggleTodo(todo: Todo) : void {
    todo.reminder = !todo.reminder
    this.todoService
    .toggleTodo(todo)
    .subscribe();
  }

  addTodo(todo: Todo) : void {
    this.todoService.addTodo(todo).subscribe((todo)=>
    this.todos.push(todo as Todo));
  }

}
