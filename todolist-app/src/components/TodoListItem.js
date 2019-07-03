import React, { Component } from "react";

export default class TodoListItem extends Component {

  render() {
    const { id, task, isComplete } = this.props.task;
    return (
      <li className="list-group-item checkbox">
        <div className="row">
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label>
              <input
                id="toggleTaskStatus"
                type="checkbox"
                defaultChecked={isComplete}
              />
            </label>
          </div>
          <div className="col-md-9 col-xs-9 col-lg-9 col-sm-9 task-text">
            <input
              type="text"
              defaultValue={task}
              style={{
                border: "none",
                backgroundColor: "#fff",
                width: "300px",
                height: "30px"
              }}
              disabled
              id={id}
              className={isComplete ? "complete" : ""}
            />
          </div>
          <div>
            <span hidden id="group-edit">
              <button
                type="button"
                className="btn btn-success"
              >
                <i className="fa fa-floppy-o" />
              </button>
              <button type="button" className="btn btn-default">
                <i className="fa fa-ban" />
              </button>
            </span>
            <button type="button" className="btn btn-warning margin">
              <i className="fa fa-pencil" />
            </button>
            <button type="button" className="btn btn-danger">
              <i className="fa fa-trash-o" />
            </button>{" "}
            &nbsp;
          </div>
        </div>
      </li>
    );
  }
}
