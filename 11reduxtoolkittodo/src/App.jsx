import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <h2>Redux Toolkit</h2>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
