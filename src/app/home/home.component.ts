import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public activeUserName: User | undefined;
  constructor(private userService: UserService) {
    this.activeUserName = this.userService.activeUser;
  }

  ngOnInit(): void {
  }

}
