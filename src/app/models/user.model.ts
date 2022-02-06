import { IWithIdentity } from "./identity.model";
import { MyList } from "./my-list.model";
import { Todo } from "./todo.model";

export class User implements IWithIdentity {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public password: string,
        public email: string,
        public todoList: MyList<Todo>,
    ) {
    }
}