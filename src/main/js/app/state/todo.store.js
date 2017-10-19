import { observable, action } from "mobx";
import { Todo } from "./todo.entity";
import { HttpService } from "../shared/utils/http.service";
import { unwrapHalList } from "../shared/utils/unwrapHal";

export class TodoStore {
  resourceUrl = "/todos";
  @observable todos = [];
  @observable loading = false;
  @observable hasError = false;
  @observable error = null;

  http = new HttpService();

  @action
  addTodo(title) {
    const newTodo = new Todo(null, title);
    this.todos.push(newTodo);
    const payload = {
      title: title,
      completed: false
    };
    this.http.post(this.resourceUrl, payload);
  }

  @action
  fetchTodos() {
    this.todos = [];
    this.loading = true;
    this.hasError = false;
    this.error = null;

    this.http.get(this.resourceUrl).then(
      action("fetchTodosSuccess", todos => {
        const unwrappedTodos = unwrapHalList(todos);
        this.todos = unwrappedTodos.map(
          todo => new Todo(todo.id, todo.title, todo.completed)
        );
        this.loading = false;
      }),
      action("fetchTodosError", error => {
        this.hasError = true;
        this.error = error;
      })
    );
  }
}
