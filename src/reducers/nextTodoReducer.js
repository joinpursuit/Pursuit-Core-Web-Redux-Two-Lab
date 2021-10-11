
   
import { NEXT_TODO_ID } from "../actions/actionTypes";

const nextTodoReducer = (state = 1, action) => {
  switch (action.type) {
    case NEXT_TODO_ID:
      return state + 1;
    default:
      return state;
  }
};

export default nextTodoReducer;