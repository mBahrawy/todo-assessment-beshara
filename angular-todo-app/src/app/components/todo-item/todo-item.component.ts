import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from "../../core/interfaces/Todo"
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo | undefined;
  @Output() onDeleteTodo :EventEmitter<Todo>  = new EventEmitter();
  @Output() onToggleTodo :EventEmitter<Todo>  = new EventEmitter();

  constructor() { }

  onDelete(todo: Todo) :void {
    this.onDeleteTodo.emit(todo)
  }

  onToggle(todo: Todo) :void{
    this.onToggleTodo.emit(todo)
  }

  ngOnInit(): void {
  }

}
