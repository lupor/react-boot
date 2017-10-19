import React from "react";
import { TodoCard } from "./todo-card";
import { observer } from "mobx-react";

@observer
export class TodoList extends React.Component {
  render() {
    const store = this.props.todoStore;

    return (
      <div>
        <ul>
          {store.todos.map(todo => (
            <li key={todo.id}>
              <TodoCard title={todo.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
