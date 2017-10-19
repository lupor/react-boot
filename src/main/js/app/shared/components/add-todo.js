import React from "react";
import "./add-todo.css";
import { Task } from "../../state/todo.entity";
import { observer } from "mobx-react";
import { ButtonPrimary } from "./button-primary";

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
          onKeyPress={this.handleKeyPress.bind(this)}
        />
        <ButtonPrimary clickFn={this.addTodo.bind(this)} />
      </div>
    );
  }

  addTodo() {
    this.todoStore.addTodo(this.state.inputValue);
    this.state.inputValue = "";
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  handleKeyPress(e) {
    if (e && e.key && e.key === "Enter") {
      this.addTodo();
    }
  }
}
