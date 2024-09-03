import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter diff={1} />
      <Counter diff={10} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
