import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    value: ''
  }

  onSubmit = event => {
    event.preventDefault();
    let newTask = this.state.value;
    this.props.addNewTask(newTask);
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <button type="button" className="btn btn-success" id="btnAdd">
                <span>ADD NEW</span>
              </button>
              <button
                type="button"
                className="btn btn-success"
                id="btnCancel"
                hidden
              >
                <span>CANCEL</span>
              </button>
            </div>
            <div className="panel-body row" id="form-add">
              <div className="form-group col-md-9">
                <input
                  type="text"
                  placeholder="New Task"
                  className="form-control"
                  id="addTask"
                  defaultValue={this.state.value}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group col-md-1">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
