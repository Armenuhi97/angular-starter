var User = /** @class */ (function () {
    function User(id, name, todoList) {
        this.id = id;
        this.name = name;
        this.todoList = todoList;
    }
    return User;
}());
var Todo = /** @class */ (function () {
    function Todo(id, title) {
        this.id = id;
        this.title = title;
    }
    return Todo;
}());
var MyList = /** @class */ (function () {
    function MyList(initialData) {
        this.values = initialData || [];
    }
    MyList.prototype.add = function (data) {
        if (!this.values.find(function (item) { return item.id === data.id; })) {
            this.values.push(data);
        }
    };
    MyList.prototype.findById = function (id) {
        return this.values.find(function (item) { return item.id === id; }) || null;
    };
    MyList.prototype.deleteById = function (id) {
        var lengthBeforeDelete = this.values.length;
        this.values = this.values.filter(function (item) { return item.id === id; });
        return lengthBeforeDelete === this.values.length;
    };
    return MyList;
}());
