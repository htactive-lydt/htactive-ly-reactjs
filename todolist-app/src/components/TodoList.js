import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends Component {

  render() {
    console.log(this.props.items)
    var items = this.props.items.map(item => (
      <TodoListItem key={item.id} task={item} />
    ));
    
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">LIST OF TASK</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">{items}</ul>
        </div>
      </div>
    );
  }
}
