import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isUpdating: false
    };
  }

  deleteTask = () => {
    this.props.deleteTask(this.props.task);
  };

  markDoneTask = () => {
    this.props.updateTask({
      ...this.props.task,
      isComplete: !this.props.task.isComplete
    });
  };

  hanleUpdate = () => {
    this.setState(prevState => ({
      isUpdating: !prevState.isUpdating
    }));
  };

  hanleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  saveUpdateTask = () => {
    this.props.updateTask({
      ...this.props.task,
      task: this.state.value
    });
    this.hanleUpdate();
  };

  render() {
    const { id, task, isComplete } = this.props.task;
    const { isUpdating } = this.state;
    return (
      <li className="list-group-item checkbox">
        <div className="row">
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label>
              <input
                id="toggleTaskStatus"
                type="checkbox"
                defaultChecked={isComplete}
                onChange={this.markDoneTask}
              />
            </label>
          </div>
          <div
            className={`col-md-9 col-xs-9 col-lg-9 col-sm-9 ${
              isUpdating ? "task-text" : "task-text-disable"
            }`}
          >
            <input
              type="text"
              defaultValue={task}
              id={id}
              onChange={this.hanleChange}
              className={`form-control col-sm-6 ${
                isComplete ? "complete" : ""
              }`}
            />
          </div>
          <div>
            {isUpdating ? (
              <span>
                <Button
                  className="btn btn-success btn-control"
                  onClick={this.saveUpdateTask}
                  icon="fa fa-floppy-o"
                />
                <Button
                  className="btn btn-secondary btn-control"
                  onClick={this.hanleUpdate}
                  icon="fa fa-ban"
                />
              </span>
            ) : (
              <Button
                className="btn btn-warning margin btn-control"
                onClick={this.hanleUpdate}
                icon="fa fa-pencil"
              />
            )}
            <Button
              className="btn btn-danger"
              icon="fa fa-trash-o"
              onClick={() =>
                window.confirm("Do you want to delete this task?")
                  ? this.deleteTask()
                  : ""
              }
            />
            &nbsp;
          </div>
        </div>
      </li>
    );
  }
}

TodoListItem.propTypes = {
  task: PropTypes.exact({
    id: PropTypes.number,
    task: PropTypes.string,
    isComplete: PropTypes.bool
  }),
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

TodoListItem.defaultProps = {
  task: {
    id: 0,
    task: "Null r nè",
    isComplete: false
  }
}
