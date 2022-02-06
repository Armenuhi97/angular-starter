import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { UsersComponent } from '../users/users.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { ToDoItemComponent } from '../to-do-list/to-do-item/to-do-item.component';
import { UserItemComponent } from '../users/user-item/user-item.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    UsersComponent,
    ToDoListComponent,
    ToDoItemComponent,
    UserItemComponent,
    MainComponent,
    HomeComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
