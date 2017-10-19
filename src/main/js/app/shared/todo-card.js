import React from "react";
import "./todo-card.css";

export function TodoCard(props) {
  return (
    <div className="todo-card">
      <span className="todo-card__title">{props.title}</span>
    </div>
  );
}
