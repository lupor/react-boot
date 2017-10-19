import React from "react";
import { TodoCard } from "./todo-card";
import { observer } from "mobx-react";

@observer
export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.todoStore;
  }
  render() {
    return (
      <div>
        <ul>
          {this.store.todos.map(todo => (
            <li key={todo.id}>
              <TodoCard
                todo={todo}
                deleteFn={this.removeTodo.bind(this)}
                updateFn={this.updateTodo.bind(this)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  removeTodo(id) {
    this.store.deleteTodo(id);
  }

  updateTodo(id) {
    this.store.updateTodo(id);
  }
}
