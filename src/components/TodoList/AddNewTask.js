import React, { useContext } from "react";
import ContextAPI from "../../context/ContextAPI";

const AddNewTask = () => {
  const context = useContext(ContextAPI);

  return (
    // <ContextAPI.Consumer>
    //   {(context) => (
    <div>
      <form
        className="form-inline justify-content-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="input-group w-25">
          <input
            type="text"
            placeholder="کار روزانه جدید را وارد کنید"
            className="form-control text-center "
            onChange={context.setTask}
            value={context.state.todoListItem}
          />
          <div className="input-group-prepend">
            <button
              type="submit"
              onClick={context.handleNewTask}
              className="btn btn-success btn-lg fa fa-plus-square"
            />
          </div>
        </div>
      </form>
    </div>
    //   )}
    // </ContextAPI.Consumer>
  );
};

export default AddNewTask;
