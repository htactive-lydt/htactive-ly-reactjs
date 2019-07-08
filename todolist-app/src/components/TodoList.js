import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types';

export default function TodoList(props) {

  function changeFilter (event){
    props.changeFilter(event.target.value);
  };

  const {items, deleteTask, updateTask, percent} = props;

  let listItems = items.map(item => (
    <TodoListItem
      key={item.id}
      task={item}
      deleteTask={deleteTask}
      updateTask={updateTask}
    />
  ));

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
          onChange={changeFilter}
          id="selected"
        >
          <option value="1">All Task</option>
          <option value="2">Active</option>
          <option value="3">Completed</option>
        </select>
        <ul className="list-group">{listItems}</ul>
      </div>
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.array,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  percent: PropTypes.number
}
