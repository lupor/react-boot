import { observable } from "mobx";
import { Todo } from "./todo.entity";

export class TodoStore {
  @observable todos = [];

  addTodo(task) {
    console.debug("adding todo:");
    console.debug(task);
    this.todos.push(new Todo(task));
  }
}
