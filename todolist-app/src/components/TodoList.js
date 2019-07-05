import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 0
    };
  }

  changeFilter = async event => {
    await this.setState({
      selectValue: event.target.value
    });
    this.props.changeFilter(this.state.selectValue);
  };

  render() {
    var items = this.props.items.map(item => (
      <TodoListItem
        key={item.id}
        task={item}
        deleteTask={this.props.deleteTask}
        markDoneTask={this.props.markDoneTask}
        updateTask={this.props.updateTask}
      />
    ));
    const { percent } = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">LIST OF TASK</h3>
        </div>
        <div className="panel-body">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped bg-info"
              role="progressbar"
              style={{ width: percent + "%" }}
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {percent}%
            </div>
          </div>
          <select
            className="form-control col-sm-2 combobox"
            defaultValue={this.state.selectValue}
            onChange={this.changeFilter}
            id="selected"
          >
            <option value="1">All Task</option>
            <option value="2">Active</option>
            <option value="3">Completed</option>
          </select>
          <ul className="list-group">{items}</ul>
        </div>
      </div>
    );
  }
}
