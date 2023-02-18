import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  title: string = 'Todo App';
  showAddTodo: boolean | undefined = false;
  subscription: Subscription | undefined;

  constructor(private UiService: UiService) {}

  toggleAddTodo()  {
    this.UiService.toggleAddTodo();
  }

  ngOnInit(): void {
    this.subscription = this.UiService.onToggle().subscribe(value=> this.showAddTodo = value)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
