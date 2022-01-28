import { Component, OnInit } from '@angular/core';
import { MyList, Todo, User } from '../models/data'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usersList = new MyList<User>();
  constructor() { }

  ngOnInit(): void {
    this.initValues();
  }
  private initValues():void {
    for (let i = 1; i <= 10; i++) {
      this.usersList.add(new User(i, `User ${i}`, new MyList<Todo>(), false));
    }
    let user1 = this.usersList.findById(1);
    let user2 = this.usersList.findById(2);
    for (let i = 1; i <= 5; i++) {
      user1?.todoList.add(new Todo(i, `Todo item ${i}`));
      user2?.todoList.add(new Todo(i, `Todo item ${i}`));
    }
  }
  public openTodoList(item: User): void {
    item.isOpened = !item.isOpened;
  }

}
