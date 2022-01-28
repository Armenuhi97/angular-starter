import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/data';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() item: Todo | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
