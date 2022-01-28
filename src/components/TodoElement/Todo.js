import React from "react";
import minusIcon from "img/minus-square-regular.svg";
import checkIcon from "img/check-square-regular.svg";
import Button from "components/Button/Button.jsx";
import "./style.css";

function Todo(props) {
  const { todo, handleCloseClick, handleStrikeClick } = props;
  return (
    <div className="todoElementContainer">
      <span>{todo}</span>
      <Button className="close" onClick={() => handleCloseClick(todo)}>
        <img src={minusIcon} />
      </Button>
      <Button className="strike" onClick={() => handleStrikeClick(todo)}>
        <img src={checkIcon} />
      </Button>
    </div>
  );
}

export default Todo;
