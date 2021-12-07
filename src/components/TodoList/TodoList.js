import React, { useContext } from "react";
import ContextAPI from "../../context/ContextAPI";
import Todo from "./Todo";

const TodoList = () => {
  const context = useContext(ContextAPI);
  return (
    // <ContextAPI.Consumer>
    //   {(context) => (
    <div>
      {context.state.todoListItems.map((item) => {
        return (
          <Todo
            todoItem={item.task}
            key={item.id}
            isCompleted={item.completedItem}
            deleteTodoItem={() => context.handleDeleteTodoList(item.id)}
            changeTodoItem={(event) =>
              context.handleChangeTodoList(event, item.id)
            }
            completeTodoItem={() => context.handleCompleteTodoList(item.id)}
          />
        );
      })}
    </div>
    //   )}
    // </ContextAPI.Consumer>
  );
};

export default TodoList;
