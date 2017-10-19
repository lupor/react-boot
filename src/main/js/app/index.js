import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./home/home";
import { Details } from "./details/details";
import { TodoStore } from "./state/todo.store";

export default class App extends React.Component {
  render() {
    const todoStore = new TodoStore();
    todoStore.fetchTodos();

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Details</Link>
            </li>
          </ul>
          <hr />
          <Route
            exact
            path="/"
            render={props => <Home {...props} todoStore={todoStore} />}
          />
          <Route
            path="/todo"
            render={props => <Details {...props} todoStore={todoStore} />}
          />
        </div>
      </Router>
    );
  }
}
console.log("Environment set to:");
console.log(process.env);
ReactDOM.render(<App />, document.getElementById("root"));
