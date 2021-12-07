import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import AddNewTask from "./components/TodoList/AddNewTask";
import Header from "./components/Header/Header";
import ShowListItems from "./components/ShowListItems/ShowListItems";
import ContextAPI from "./context/ContextAPI";

class App extends Component {
  state = {
    todoListItems: [],
    todoListItem: "",
    showTodoList: true,
    headerTodoList: "لیست کارهای روزانه",
  };

  handleShowTodoList = () => {
    this.setState({
      showTodoList: !this.state.showTodoList,
    });
  };

  handleDeleteTodoList = (id) => {
    const todoListItems = [...this.state.todoListItems];
    const filterListItems = todoListItems.filter((item) => id !== item.id);
    this.setState({ todoListItems: filterListItems });
  };

  handleChangeTodoList = (event, id) => {
    const { todoListItems } = this.state;
    const indexItem = todoListItems.findIndex((index) => id === index.id);
    const todoItem = todoListItems[indexItem];
    todoItem.task = event.target.value;
    todoListItems[indexItem] = todoItem;
    this.setState({ todoListItems });
  };

  handleCompleteTodoList = (id) => {
    const todoListItems = [...this.state.todoListItems];
    const indexTodoItem = todoListItems.findIndex((item) => id === item.id);
    const todoItem = todoListItems[indexTodoItem];
    todoItem.completedItem = !todoItem.completedItem;
    todoListItems[indexTodoItem] = todoItem;
    this.setState({ todoListItems });
  };

  handleNewTask = () => {
    const todoListItems = [...this.state.todoListItems];
    const todoListItem = {
      id: Math.floor(Math.random() * 1000),
      task: this.state.todoListItem,
      completedItem: false,
    };

    if (todoListItem.task !== "" && todoListItem.task !== " ") {
      todoListItems.push(todoListItem);
      this.setState({ todoListItems, todoListItem: "" });
    }
  };

  setTask = (event) => {
    this.setState({ todoListItem: event.target.value });
  };

  render() {
    const { todoListItems, showTodoList } = this.state;

    let todoList = null;
    if (showTodoList) {
      todoList = (
        <TodoList
        // todoList={todoListItems}
        // deleteTodoList={this.handleDeleteTodoList}
        // changeTodoList={this.handleChangeTodoList}
        // completeTodoList={this.handleCompleteTodoList}
        // style={this.state.color}
        />
      );
    }

    return (
      <ContextAPI.Provider
        value={{
          state: this.state,
          handleShowTodoList: this.handleShowTodoList,
          handleDeleteTodoList: this.handleDeleteTodoList,
          handleChangeTodoList: this.handleChangeTodoList,
          handleCompleteTodoList: this.handleCompleteTodoList,
          handleNewTask: this.handleNewTask,
          setTask: this.setTask,
        }}
      >
        <div className="rtl text-center">
          <Header
          // todoListItems={todoListItems.length}
          // headerTodoList={this.state.headerTodoList}
          />
          <AddNewTask
          // setTask={this.setTask}
          // newTask={this.handleNewTask}
          // value={this.state.todoListItem}
          />
          <ShowListItems
          // handleShowTodoList={this.handleShowTodoList}
          // showTodoList={showTodoList}
          />
          {todoList}
        </div>
      </ContextAPI.Provider>
    );
  }
}

export default App;
