import { Component, OnInit } from '@angular/core';
import { IMenu } from '../models/menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menuItems: IMenu[] = [
    { title: 'Home', path: '/' },
    { title: 'Users', path: '/users' },
    { title: 'Todo list', path: '/to-do-list' },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
