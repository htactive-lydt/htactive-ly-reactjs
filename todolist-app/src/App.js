import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const url = "http://5d19c3a8b3b6a100148d22b1.mockapi.io";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  getData = () => {
    axios.get(url + "/todoList").then(
      result => {
        this.setState({
          items: result.data
        });
      },
      error => {
        this.setState({
          error
        });
      }
    );
  };

  componentDidMount() {
    this.getData();
  }

  addNewTask = newTask => {
    axios.post(url + "/todoList", newTask).then(res => {
      if (res.status === 201) {
        this.getData();
      }
    });
  };

  deleteTask = task => {
    axios.delete(url + `/todoList/${task.id}`).then(res => {
      if (res.status === 200) {
        this.getData();
      }
    });
  };

  updateTask = task => {
    axios.put(url + `/todoList/${task.id}`, task).then(res => {
      if (res.status === 200) {
        this.getData();
      }
    });
  };

  changeFilter = selectedValue => {
    this.setState({
      selectedValue
    });
  };

  select = () => {
    switch (this.state.selectedValue) {
      case "2":
        return this.state.items.filter(item => !item.isComplete);
      case "3":
        return this.state.items.filter(item => item.isComplete);
      default:
        return this.state.items;
    }
  };

  render() {
    const { items } = this.state;

    let percent = 0;
    if (items.length > 0) {
      percent =
        (items.filter(item => item.isComplete).length / items.length) * 100;
    }
    return (
      <div className="container">
        <TodoForm addNewTask={this.addNewTask} />
        <TodoList
          items={this.select()}
          percent={Math.round(percent)}
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }
}
