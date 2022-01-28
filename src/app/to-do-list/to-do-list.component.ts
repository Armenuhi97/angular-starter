import { Component, OnInit } from '@angular/core';
import { MyList, Todo } from '../models/data';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public list = new MyList<Todo>();

  constructor() { }

  ngOnInit(): void {
    this.initValues();
  }
  private initValues(): void {
    for (let i = 1; i <= 5; i++) {
      this.list.add(new Todo(i, `Todo item ${i}`));
    }
  }
}
