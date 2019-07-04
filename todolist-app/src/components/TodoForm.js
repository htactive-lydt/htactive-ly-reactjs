import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    isOpenForm: false,
    value: ""
  };

  handleOpenForm = () => {
    this.setState(prevState => ({
      isOpenForm: !prevState.isOpenForm
    }));
  };

  onSubmit = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.value,
      isComplete: false
    };
    this.props.addNewTask(newTask);
    this.setState({
      isOpenForm: false,
      value: ""
    });
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { isOpenForm } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <button
                type="button"
                className="btn btn-success"
                id="btnAdd"
                onClick={this.handleOpenForm}
              >
                {isOpenForm ? <span>CANCEL</span> : <span>ADD NEW</span>}
              </button>
            </div>
            {isOpenForm ? (
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
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    );
  }
}
