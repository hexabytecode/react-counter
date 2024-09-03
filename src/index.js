import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  return (
    <div>
      <h1>0</h1>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
