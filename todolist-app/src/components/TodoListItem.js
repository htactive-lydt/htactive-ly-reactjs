import React, { Component } from "react";

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
    this.props.task.isComplete = !this.props.task.isComplete;
    this.props.markDoneTask(this.props.task);
  };

  hanleUpdate = () => {
    this.setState(prevState => ({
      isUpdating: !prevState.isUpdating
    }));
  };

  hanleChange = event => {
    this.setState({
      value: event.target.value
    })
  };

  saveUpdateTask = () => {
    this.props.task.task = this.state.value;
    this.props.updateTask(this.props.task);
    this.hanleUpdate();
  };

  update = () => {
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
              className={`form-control col-sm-6 ${isComplete ? "complete" : ""}`}
            />
          </div>
          <div>
            {isUpdating ? (
              <span>
                <button
                  type="button"
                  className="btn btn-success btn-control"
                  onClick={this.saveUpdateTask}
                >
                  <i className="fa fa-floppy-o" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-control"
                  onClick={this.hanleUpdate}
                >
                  <i className="fa fa-ban" />
                </button>
              </span>
            ) : (
              <button
                type="button"
                className="btn btn-warning margin btn-control"
                onClick={this.update}
              >
                <i className="fa fa-pencil" />
              </button>
            )}
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.deleteTask}
            >
              <i className="fa fa-trash-o" />
            </button>
            &nbsp;
          </div>
        </div>
      </li>
    );
  }
}
