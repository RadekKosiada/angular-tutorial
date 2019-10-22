angular.module('todoApp', [])
    //controller?????
    .controller('TodoListController', function() {
        //?????
        var todoList = this;
        /* array todos */
        todoList.todos = [
            { text: 'learn AngularJS', done: false },
        ];
        /* method addTodo */
        todoList.addTodo = function() {
            todoList.todos.push({ text: todoList.todoText, done: false });
            todoList.todoText = '';
        };

        /* method remaining */
        todoList.remaining = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                // adding 0 if done or 1 if not done;
                count += todo.done ? 0 : 1;
            });
            return count;
        };
        /* method archive */
        todoList.archive = function() {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) {
                    todoList.todos.push(todo);
                }
            });
        };

    });