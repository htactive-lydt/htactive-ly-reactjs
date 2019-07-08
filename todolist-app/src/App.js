import React, { Component } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {
  addNewTask,
  updateTask,
  deleteTask,
  getData
} from "./helpers/requestAPI";
import {calPercent} from './helpers/calPercent'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  getData = async () => {
    let data = await getData();
    this.changeState(data);
  };

  componentDidMount() {
    this.getData();
  }

  changeState = (data) => {
    this.setState({
      items: data.reverse()
    });
  }

  handleAddNewTask = async newTask => {
    let data = await addNewTask(newTask);
    this.changeState(data);
  };

  handleDeleteTask = async task => {
    let data = await deleteTask(task);
    this.changeState(data);
  };

  handleUpdateTask = async task => {
    let data = await updateTask(task);
    this.changeState(data);
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

    return (
      <div className="container">
        <TodoForm addNewTask={this.handleAddNewTask} />
        <TodoList
          items={this.select()}
          percent={Math.round(calPercent(items))}
          deleteTask={this.handleDeleteTask}
          updateTask={this.handleUpdateTask}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }
}
