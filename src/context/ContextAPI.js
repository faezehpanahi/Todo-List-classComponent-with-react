import React, { createContext } from "react";

const ContextAPI = createContext({
  state: {},
  handleShowTodoList: () => {},
  handleDeleteTodoList: () => {},
  handleChangeTodoList: () => {},
  handleCompleteTodoList: () => {},
  handleNewTask: () => {},
  setTask: () => {},
});

export default ContextAPI;
