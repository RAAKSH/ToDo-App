import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageHeader } from "./Components/PageHeader";
import { AddTodo } from "./Components/addToDo";
import axios from "axios";
import "./App.css";
import { About } from "./Components/About";
import  { ToDo }  from "./Components/ToDo";

class App extends Component {

  constructor(props){
    super(props)
   this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => this.setState({ todos: response.data }));
  }



    // To delete completed Todo
   delTodo = (id) => {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response =>
          this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
          })
        );
        alert("To do deleted successfully");
    };

   //  Completed Todo
   markComplete =(id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  };


   //To add New To do to the list
    addTodo = (title) => {
      console.log('title')
      axios
        .post('https://jsonplaceholder.typicode.com/todos', {
          title,
          isCompleted: false
        })
        .then(response =>
          this.setState({ todos: [...this.state.todos, response.data] })
        );
    };
  
  
render(){
  return (
    <Router>
      <PageHeader />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <div className="container">
              <AddTodo
              addTodo={this.addTodo}
              />
                <ToDo 
                  todos={this.state.todos}
                 markComplete={this.markComplete}
                 delTodo={this.delTodo}
                />
              </div>
            </React.Fragment>
          }
        />
        <Route
          path="/about"
          element={
            <React.Fragment>
              <div className="container">
                <About />
              </div>
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
        }
}

export default App;
