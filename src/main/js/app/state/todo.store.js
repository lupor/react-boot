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
    const payload = {
      title: title,
      completed: false
    };
    this.http
      .post(this.resourceUrl, payload)
      .then(
        action("createTodoSuccess", todo => {
          this.todos.push(new Todo(todo.id, todo.title, todo.completed));
        })
      )
      .catch(
        action("createTodoError", error => {
          this.hasError = true;
          this.error = error;
        })
      );
  }

  @action
  fetchTodos() {
    this.todos = [];
    this.loading = true;
    this.hasError = false;
    this.error = null;

    this.http
      .get(this.resourceUrl)
      .then(
        action("fetchTodosSuccess", todos => {
          const unwrappedTodos = unwrapHalList(todos);
          this.todos = unwrappedTodos.map(
            todo => new Todo(todo.id, todo.title, todo.completed)
          );
          this.loading = false;
        })
      )
      .catch(
        action("fetchTodosError", error => {
          this.hasError = true;
          this.error = error;
          this.loading = false;
        })
      );
  }

  @action
  deleteTodo(id) {
    console.log("testing log statements");
    this.http
      .delete(this.resourceUrl.concat(...["/", id]))
      .then(
        action("deleteTodoSuccess", _ => {
          console.log("removing todo with id: " + id);
          this.todos = this.todos.filter(todo => todo.id !== id);
          console.log(this.todos);
        })
      )
      .catch(
        action("deleteTodoError", error => {
          this.hasError = true;
          this.error = error;
        })
      );
  }
}
