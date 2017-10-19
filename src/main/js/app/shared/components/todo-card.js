import React from "react";
import "./todo-card.css";

export function TodoCard(props) {
  const { todo, deleteFn, updateFn } = props;
  return (
    <div className="todo-card">
      <input type="checkbox" checked={todo.completed} />
      <span className="todo-card__title">{todo.title}</span>
      <button type="button" onClick={() => deleteFn(todo.id)}>
        X
      </button>
    </div>
  );
}
