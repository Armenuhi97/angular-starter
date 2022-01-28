import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
