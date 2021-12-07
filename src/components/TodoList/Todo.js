import React from "react";
import "./Todo.css";

const Todo = ({
  todoItem,
  isCompleted,
  deleteTodoItem,
  changeTodoItem,
  completeTodoItem,
}) => {
  return (
    <div className="card border-info rounded-lg w-25 mt-3 mb-3 mx-auto p-3 bg-info ">
      <div className="d-flex">
        <p className="text-left w-75  mt-2 mb-2 mx-auto text-dark h4">
          {isCompleted ? <del>{todoItem}</del> : todoItem}
        </p>
        <div className="btn-group">
          <button
            type="button"
            onClick={completeTodoItem}
            className="btn btn-primary btn-lg fa fa-check-square  "
          />
          <button
            type="button"
            onClick={deleteTodoItem}
            className="btn btn-danger btn-lg fa fa-trash"
          />
        </div>
      </div>
      <input
        type="text"
        placeholder={todoItem}
        // value={todoItem}
        onChange={changeTodoItem}
        className="text-left border-0 w-75 rounded mt-2 mb-2 mx-auto"
      />
    </div>
  );
};

export default Todo;
