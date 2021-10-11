import { Provider } from "react-redux";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import "./App.css";
import TodoApp from "./components/todoApp";
import rootReducer from "./reducers";

function App() {
  return (
    <Provider store={createStore(rootReducer, devToolsEnhancer())}>
      <div className="app">
        <h1>Todos</h1>
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
