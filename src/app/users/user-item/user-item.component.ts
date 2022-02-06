import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  public isOpened: boolean = false;
  @Input() user: User | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  public openCloseToDoList() {
    this.isOpened = !this.isOpened;
  }

}
