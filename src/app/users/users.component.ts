import { Component, OnInit } from '@angular/core';
import { MyList } from '../models/my-list.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usersList = new MyList<User>([]);
  public searchValue: string='';
  constructor(private userService: UserService) {
    this.usersList = this.userService.getUsersList();
  }

  ngOnInit(): void {
  }

}
