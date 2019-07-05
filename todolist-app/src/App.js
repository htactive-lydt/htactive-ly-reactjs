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
      items: [],
      selectedValue: ""
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

  addNewTask = async newTask => {
    await axios.post(url + "/todoList", newTask);

    this.select(this.state.selectedValue);
  };

  deleteTask = async task => {
    await axios.delete(url + `/todoList/${task.id}`);
    this.select(this.state.selectedValue);
  };

  markDoneTask = async task => {
    await axios.put(url + `/todoList/${task.id}`, task);
    this.select(this.state.selectedValue);
  };

  updateTask = task => {
    axios.put(url + `/todoList/${task.id}`, task).then(res => {
      if (res.status === 200) {
        this.getData();
      }
    });
  };

  select = async selectedValue => {
    let data = await axios.get(url + "/todoList").then(res => {
      return res.data;
    });

    if (selectedValue === "2") {
      data = data.filter(item => !item.isComplete);
    } else if (selectedValue === "3") {
      data = data.filter(item => item.isComplete);
    }
    this.setState({
      items: data,
      selectedValue
    });
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
          items={items}
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
