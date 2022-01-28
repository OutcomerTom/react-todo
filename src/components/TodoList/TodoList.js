import React, { useState } from "react";
import Todo from "../TodoElement/Todo";
import plusIcon from "img/plus-square-regular.svg";
import Button from "components/Button/Button.jsx";
import Input from "components/Input/Input.jsx";
import "./style.css";

function TodoList(props) {
  // const [todoList, setTodoList] =useState([]);
  // const [inputValue, setInputValue] = useState("");
  const [todoListState, setTodoListState] = useState({
    todos: [],
    inputValue: "",
    error: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    // setInputValue(value);
    setTodoListState({
      ...todoListState,
      inputValue: value,
    });
  };

  const handleButtonClick = () => {
    const { todos } = todoListState;

    if (!inputValue) return;

    if (todos.some((todo) => todo === inputValue)) {
      setTodoListState({
        ...todoListState,
        error: "To zadanie już istnieje",
        inputValue: "",
      });
      return;
    }

    setTodoListState({
      error: "",
      todos: [...todos, inputValue],
      inputValue: "",
    });
  };

  const handleTodoRemove = (todoValue) => {
    setTodoListState({
      ...todoListState,
      todos: todos.filter((todo) => todo !== todoValue),
    });
  };

  // function handleToggleComplete(id) {
  //     const updatedlist = [...todos].map((todo) => {
  //       if((todo.id === id)) {
  //         todo.completed = !todo.completed
  //       }
  //       return todo;
  //     })
  //     setList(updatedlist)
  // }

  const { error, todos, inputValue } = todoListState;

  return (
    <div className="todoList">
      <h1>Moja aplikacja Todo</h1>
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
        <Button className="button" onClick={handleButtonClick}>
          <img src={plusIcon} />
        </Button>
        {!!error && <p>{error}</p>}

        {todos.map((todo) => (
          <Todo
            key={todo}
            todo={todo}
            handleCloseClick={handleTodoRemove}
            // handleStrikeClick={handleToggleComplet}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
