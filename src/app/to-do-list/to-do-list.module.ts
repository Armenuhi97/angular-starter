import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    ToDoListComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ToDoListModule { }
