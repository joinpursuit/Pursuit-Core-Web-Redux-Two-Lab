import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  todos,
  nextTodoId,
  todosToggleComplete,
} from "../actions/todosActions";

export default function TodoApp() {
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.todos);
  const newTodoId = useSelector((state) => state.nextTodoId);
  const [newTodoText, setNewTodoText] = useState("");
  const [listNumber, setListNumber] = useState(1);

  const handleChange = (e) => setNewTodoText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(newTodoText);
  };

  const createTodo = (text) => {
    const newTodo = {
      completed: false,
      id: newTodoId,
      text,
    };
    dispatch(todos(newTodo));
    dispatch(nextTodoId());
    setNewTodoText("");
  };

  const filterTodosList = () => {
    if (listNumber === 2) return todosList.filter((todo) => !todo.completed);
    if (listNumber === 3) return todosList.filter((todo) => todo.completed);

    return todosList;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodoText} onChange={handleChange} />
        <button>Add Todo</button>
      </form>
      <button onClick={() => setListNumber(1)} disabled={listNumber === 1}>
        all
      </button>
      <button onClick={() => setListNumber(2)} disabled={listNumber === 2}>
        active
      </button>
      <button onClick={() => setListNumber(3)} disabled={listNumber === 3}>
        completed
      </button>
      <ul className="todos-list">
        {filterTodosList().map((todo) => {
          return (
            <button
              className="todos-list-btn"
              key={todo.id}
              onClick={() => dispatch(todosToggleComplete(todo.id))}
            >
              <li className={todo.completed ? "completed" : ""}>{todo.text}</li>
            </button>
          );
        })}
      </ul>
    </div>
  );
}
