import { NgModule } from "@angular/core";
import { ToDoItemComponent } from "./to-do-item/to-do-item.component";

@NgModule({
    declarations: [ToDoItemComponent],
    exports: [ToDoItemComponent]
})
export class SharedModule { }