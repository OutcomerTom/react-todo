import React from "react";
import "./style.css";

const TodoHeader = ({ taskLenght, doneTaskLenght, children }) => {
  return (
    <div className="todoHeaderContainer">
      <h2>{children}</h2>
      {taskLenght !== undefined && (
        <span className="taskNumberLabel">
          Number of tasks: <span>{taskLenght}</span>
        </span>
      )}
      {doneTaskLenght !== undefined && (
        <span className="doneTaskNumberLabel">
          Number of done tasks: <span>{doneTaskLenght}</span>
        </span>
      )}
    </div>
  );
};

export default TodoHeader;
