import "./index.css";
import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  function handleIncrement(e) {
    e.preventDefault();
    setCount(count + props.diff);
  }

  function handleDecrement(e) {
    e.preventDefault();
    setCount(count - props.diff);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+{props.diff}</button>
      <button onClick={handleDecrement}>-{props.diff}</button>
    </div>
  );
}
