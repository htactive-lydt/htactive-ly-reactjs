import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

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

  addNewTask = event => {
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
        <form>
          <div className="panel panel-default">
            <div className="panel-heading">
              <Button
                className="btn btn-success"
                onClick={this.handleOpenForm}
                text={isOpenForm ? "CANCEL" : "ADD NEW"}
              />
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
                  <Button
                    className="btn btn-primary"
                    onClick={this.addNewTask}
                    text="ADD"
                  />
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

TodoForm.propTypes = {
  addNewTask: PropTypes.func.isRequired
};
