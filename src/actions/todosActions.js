import { NEXT_TODO_ID, TODOS, TODOS_TOGGLE_COMPLETE } from "./actionTypes";

export const nextTodoId = () => {
  return { type: NEXT_TODO_ID };
};

export const todos = (todo) => {
  return { type: TODOS, todo };
};

export const todosToggleComplete = (id) => {
  return { type: TODOS_TOGGLE_COMPLETE, id };
};