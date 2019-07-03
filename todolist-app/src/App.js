import React, { Component } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoaded: false,
      items: []
    }
  }

  addNewTask = (newTask) => {
    let items = this.state.items;
    this.setState({
      items: this.state.items.concat({
        task: newTask,
        isComplete: false,
        id:554
      })
    })
  }

  componentDidMount() {
    fetch("http://5d19c3a8b3b6a100148d22b1.mockapi.io/todoList")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    // console.log(this.state.items)
    return (
      <div className="container">
        <TodoForm addNewTask={this.addNewTask}/>
        <TodoList items={this.state.items}/>
      </div>
    );
  }
}
