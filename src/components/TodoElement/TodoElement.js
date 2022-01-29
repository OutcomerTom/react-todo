import React from "react";
import minusIcon from "img/minus-square-regular.svg";
import checkIcon from "img/check-square-regular.svg";
import Button from "components/Button/Button.jsx";
import "./style.css";

function TodoElement(props) {
  const { todo, onCloseClick, onStrike } = props;
  return (
    <div className="todoElementContainer">
      {todo.strike ? (
        <strike>{todo.description}</strike>
      ) : (
        <span>{todo.description}</span>
      )}
      <Button className="close" onClick={() => onCloseClick(todo)}>
        <img src={minusIcon} />
      </Button>
      <Button className="strike" onClick={() => onStrike(todo)}>
        <img src={checkIcon} />
      </Button>
    </div>
  );
}

export default TodoElement;
