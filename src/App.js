import { Provider } from "react-redux";
import { createStore } from "redux";

import "./App.css";
import TodoApp from "./components/TodoApp";
import rootReducer from "./reducers";
// tbd
function App() {
  return (
    <Provider store={createStore(rootReducer)}>
      <div className="app">
        <h1>Todos</h1>
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
