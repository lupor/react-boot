import React from "react";
import { TodoList } from "../shared/todo-list";
import { TodoStore } from "../state/todo.store";
import { AddTodo } from "../shared/add-todo";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log("home constructor");
    console.log(props.todoStore);
  }
  render() {
    console.log("home render");
    console.log(this.props);
    console.log(this.props.todoStore);
    return (
      <div>
        <h2>Home</h2>
        <AddTodo todoStore={this.props.todoStore} />
        <TodoList todoStore={this.props.todoStore} />
      </div>
    );
  }
}
