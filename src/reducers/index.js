import { combineReducers } from "redux";
import nextTodoIdReducer from "./nextTodoIdReducer";
import todosReducer from "./todosReducer";

export default combineReducers({
  nextTodoId: nextTodoIdReducer,
  todos: todosReducer,
});
