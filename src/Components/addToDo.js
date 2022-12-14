import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: ''
          };
    }
  

  onSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    alert("To Do has been added to the List")
    this.setState({ title: '' });
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
        <input
          type="text"
          name="title"
          placeholder="Add New Todo Here..."
          value={this.state.title}
          onChange={this.onChange}
          style={{
            flex: '10',
            borderRadius: '5px 0 0 5px',
            padding: '5px 8px',
            lineHeight: '1rem',
            fontSize: '1.1rem',
            border: '1px solid #888',
            padding:'10px'
          }}
        />

        <input
          type="submit"
        value='ADD'
          className="btn"
          style={{
            flex: '2',
            borderRadius: '0 5px 5px 0',
            padding:'10px',
            background:'#8FBC8F'
          }}
        />
      </form>
    );
  }
}

const formStyle = {
  display: 'flex',
  boxShadow: '0px 0px 3px #111',
  marging:'30px',
  
};

// PropTypes
AddTodo.propTypes = {
  AddTodo: PropTypes.func
};

export default AddTodo;
