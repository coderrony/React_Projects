import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);
  const addValue = () => {
    if (counter !== 10) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
