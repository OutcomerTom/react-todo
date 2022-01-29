import React, { useState } from "react";
import TodoElement from "components/TodoElement/TodoElement";
import plusIcon from "img/plus-square-regular.svg";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { localStorageKeys } from "./helpers";
import TodoHeader from "components/TodoHeader/TodoHeader";
import "./style.css";

function TodoList(props) {
  const { TODO_LIST } = localStorageKeys;
  const todoListFromLocalStorage = localStorage.getItem(TODO_LIST);
  const initialToDoList = todoListFromLocalStorage
    ? JSON.parse(todoListFromLocalStorage)
    : [];
  const [todoList, setTodoList] = useState(initialToDoList);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const addItem = () => {
    if (inputValue.trim() === "") return;

    if (todoList.some((todo) => todo.description === inputValue)) {
      setError("To zadanie już istnieje");
      return;
    }
    const newState = [...todoList, { description: inputValue, strike: false }];
    setTodoList(newState);
    setInputValue("");
    setError("");
    localStorage.setItem(TODO_LIST, JSON.stringify(newState));
  };

  const removeTodo = (indexToRemove) => {
    const newArray = todoList.filter((todo, index) => indexToRemove !== index);
    setTodoList(newArray);
    localStorage.setItem(TODO_LIST, JSON.stringify(newArray));
  };

  const strikeTodo = (indexToStrike) => {
    const newArray = todoList.map((todo, index) =>
      indexToStrike === index ? { ...todo, strike: !todo.strike } : todo
    );
    setTodoList(newArray);
    localStorage.setItem(TODO_LIST, JSON.stringify(newArray));
  };

  const taskLenght = todoList.length;
  const doneTaskLenght = todoList.filter((todo) => todo.strike).length;

  return (
    <>
      <TodoHeader taskLenght={taskLenght} doneTaskLenght={doneTaskLenght}>
        Moja aplikacja Todo
      </TodoHeader>
      <div className="todoList">
        <div className="todoListContainer">
          <div className="inputContainer">
            <Input
              className="input"
              name="Todo Input"
              placeholder="Co będziemy dzisiaj robić?"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <Button className="button" onClick={addItem}>
            <img src={plusIcon} />
          </Button>
          {!!error && <p>{error}</p>}

          {todoList.map((todo, index) => (
            <TodoElement
              key={todo.description}
              todo={todo}
              onCloseClick={() => removeTodo(index)}
              onStrike={() => strikeTodo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
