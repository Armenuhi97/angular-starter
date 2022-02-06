import { Component, OnInit } from '@angular/core';
import { MyList } from '../models/my-list.model';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public list = new MyList<Todo>([
    {
      id: 1,
      title: 'Todo1',
    },
    {
      id: 2,
      title: 'Todo2',
    },
    {
      id: 3,
      title: 'Todo3',
    },
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
