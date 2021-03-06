import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { ToDoListComponent } from "../to-do-list/to-do-list.component";
import { UsersComponent } from "../users/users.component";
import { MainComponent } from "./main.component";
const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: 'home', component: HomeComponent },
            { path: 'users', component: UsersComponent },
            { path: 'to-do-list', component: ToDoListComponent },]
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }