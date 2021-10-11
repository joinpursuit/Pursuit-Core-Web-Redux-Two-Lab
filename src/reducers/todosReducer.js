import { TODOS, TODOS_TOGGLE_COMPLETE } from "../actions/actionTypes";

const todosToggleComplete = (state, id) => {
  const stateCopy = [...state];
  const index = stateCopy.findIndex((todo) => todo.id === id);
  stateCopy[index].completed = !stateCopy[index].completed;
  return stateCopy;
};

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case TODOS:
      return [...state, action.todo];
    case TODOS_TOGGLE_COMPLETE:
      return todosToggleComplete(state, action.id);
    default:
      return state;
  }
};

export default todosReducer;