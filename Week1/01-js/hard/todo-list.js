/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    // initialize a result variable in the constructor
    this.todos = [];
  }
  add(todo) {
    // add todo
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    // remove todo
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }
  update(index, updatedTodo) {
    // update todo
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.log("Invalid index");
    }
  }
  getAll() {
    // return all todos
    return this.todos;
  }
  get(indexOfTodo) {
    // return todo of the given index
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      return null;
    }
  }
  clear() {
    // delete all todos
    this.todos = [];
  }
}

module.exports = Todo;
