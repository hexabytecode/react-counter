import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement(e) {
    e.preventDefault();
    setCount(count + 1);
  }

  function handleDecrement(e) {
    e.preventDefault();
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
