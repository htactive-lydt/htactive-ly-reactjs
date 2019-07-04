import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      results: [],
      selectedValue: ""
    };
  }

  getData = () => {
    axios.get("http://5d19c3a8b3b6a100148d22b1.mockapi.io/todoList").then(
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
    console.log(newTask);
    axios
      .post("http://5d19c3a8b3b6a100148d22b1.mockapi.io/todoList", newTask)
      .then(res => {
        if (res.status === 201) {
          this.getData();
          this.select(this.state.selectedValue);
        }
      });
  };

  deleteTask = task => {
    axios
      .delete(`http://5d19c3a8b3b6a100148d22b1.mockapi.io/todoList/${task.id}`)
      .then(res => {
        if (res.status === 200) {
          this.getData();
        }
      });
  };

  markDoneTask = task => {
    axios
      .put(
        `http://5d19c3a8b3b6a100148d22b1.mockapi.io/todoList/${task.id}`,
        task
      )
      .then(res => {
        if (res.status === 200) {
        }
      });
  };

  updateTask = task => {
    axios
      .put(
        `http://5d19c3a8b3b6a100148d22b1.mockapi.io/todoList/${task.id}`,
        task
      )
      .then(res => {
        if (res.status === 200) {
          this.getData();
        }
      });
  };

  select = selectedValue => {
    console.log(selectedValue);

    var items = this.state.items;

    let results = [];
    if (selectedValue === "2") {
      results = items.filter(item => !item.isComplete);
    } else if (selectedValue === "3") {
      results = items.filter(item => item.isComplete);
    }

    this.setState({ results, selectedValue });
  };

  render() {
    const { items, results } = this.state;
    let percent = 0;
    if (items.length > 0) {
      percent =
        (items.filter(item => item.isComplete).length / items.length) * 100;
    }
    return (
      <div className="container">
        <TodoForm addNewTask={this.addNewTask} />
        <TodoList
          items={results.length ? results : items}
          percent={Math.round(percent)}
          deleteTask={this.deleteTask}
          markDoneTask={this.markDoneTask}
          updateTask={this.updateTask}
          select={this.select}
        />
      </div>
    );
  }
}
