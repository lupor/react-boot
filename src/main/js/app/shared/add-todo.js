import React from "react";
import "./add-todo.css";
import { Task } from "../state/todo.entity";
import { observer } from "mobx-react";

@observer
export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.todoStore = props.todoStore;
    this.state = {
      inputValue: ""
    };
  }

  render() {
    return (
      <div>
        <input
          className="input"
          placeholder="Title"
          onChange={this.updateInputValue.bind(this)}
        />
        <button type="button" onClick={this.addTodo.bind(this)}>
          Add
        </button>
      </div>
    );
  }

  addTodo() {
    this.todoStore.addTodo(this.state.inputValue);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
}
