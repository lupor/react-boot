import React from "react";
import { TodoList } from "../shared/todo-list";
import { TodoStore } from "../state/todo.store";
import { AddTodo } from "../shared/add-todo";

export class Home extends React.Component {
  render() {
    const { todoStore } = this.props;
    return (
      <div>
        <h2>Home</h2>
        <AddTodo todoStore={todoStore} />
        <TodoList todoStore={todoStore} />
      </div>
    );
  }
}
