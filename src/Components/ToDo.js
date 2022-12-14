import React, { Component } from "react";
import PropTypes from "prop-types";
import { TodoItem } from "./ToDoItem";

export class ToDo extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <div>
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      </div>
    ));
  }
}

// PropTypes
ToDo.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func,
  delTodo: PropTypes.func,
};
