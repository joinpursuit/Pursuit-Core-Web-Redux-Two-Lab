import { combineReducers } from "redux";
import nextTodoReducer from "./nextTodoReducer";
import todosReducer from "./todosReducer";

export default combineReducers({
  nextTodoId: nextTodoReducer,
  todos: todosReducer,
});