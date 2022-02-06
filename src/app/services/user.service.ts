import { Injectable } from "@angular/core";
import { MyList } from "../models/my-list.model";
import { Todo } from "../models/todo.model";
import { User } from "../models/user.model";

@Injectable()
export class UserService {
    public activeUser: User | undefined;
    private usersList = new MyList<User>([
        {
            id: 1,
            firstName: 'User1',
            lastName: 'User1',
            password: '123456',
            email: 'user1@gmail.com',
            todoList: new MyList<Todo>([
                { id: 1, title: 'Todo1' },
                { id: 2, title: 'Todo2' },
            ]),
        },
        {
            id: 2,
            firstName: 'User2',
            lastName: 'User2',
            password: '1111',
            email: 'user2@gmail.com',
            todoList: new MyList<Todo>(),
        },
        {
            id: 3,
            firstName: 'User3',
            lastName: 'User3',
            password: '2222',
            email: 'user3@gmail.com',
            todoList: new MyList<Todo>([{ id: 3, title: 'Todo3' }]),
        },
    ])
    public getUsersList(): MyList<User> {
        return this.usersList;
    }
    public getUser(user: User): User | null {
        return this.usersList.values.find((val) => { return val.email == user.email && val.password == user.password }) || null
    }
    public addUser(user: User): void {
        this.usersList.add(user);
    }
}