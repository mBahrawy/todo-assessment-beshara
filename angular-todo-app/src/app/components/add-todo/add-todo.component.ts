import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui.service';
import { Todo } from 'src/app/core/interfaces/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTodo: boolean | undefined;
  subscription: Subscription;

  @Output() onAddTodo :EventEmitter<Todo> = new EventEmitter();

  constructor(private UiService:UiService) {
    this.subscription = this.UiService.onToggle().subscribe(value=> this.showAddTodo = value)
  }

  ngOnInit(): void {
  }

  onSubmit() :void {
    if (this.text.trim().length < 2) {
      alert('Please enter a valid todo name');
      return
    }

    const newTodo : Todo = {
      id: Math.floor(Math.random()*1000000),
      text: this.text,
      day: this.day,
      reminder:this.reminder
    }

    this.text = '';
    this.day = '';
    this.reminder = false;

    this.onAddTodo.emit(newTodo)
    this.UiService.toggleAddTodo()

  }

}
