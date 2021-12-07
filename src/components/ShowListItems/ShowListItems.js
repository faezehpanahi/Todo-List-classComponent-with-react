import React, { useContext } from "react";
import ContextAPI from "../../context/ContextAPI";

const ShowListItems = () => {
  const context = useContext(ContextAPI);

  return (
    // <ContextAPI.Consumer>
    //   {(context) => (
    <div>
      <button
        type="button"
        onClick={() => context.handleShowTodoList()}
        className={
          context.state.showTodoList
            ? "btn btn-lg btn-warning m-3 text-light"
            : "btn btn-lg btn-danger m-3 text-light"
        }
      >
        نمایش لیست برنامه‌ها
      </button>
    </div>
    //   )}
    // </ContextAPI.Consumer>
  );
};

export default ShowListItems;
