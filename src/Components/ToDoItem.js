import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgound: "#333",
      margin: "10px",
      borderBottom: "1px solid #ccc",
      textDecoration: this.props.todo.isCompleted ? "line-through" : "none",
      padding: "10px",
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <inputs
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            style={{ marginRight: "5px" }}
          />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={buttonStyle}>
           Remove
          </button>
        </p>
      </div>
    );
  }
}

const buttonStyle = {
  background: '#008080',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  cursor: 'pointer',
  float: 'right'
};

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.object,
  markComplete: PropTypes.func.isRequired,
};
