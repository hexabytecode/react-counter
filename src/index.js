import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
