import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const married = false;
  return <h1>{married ? "I'm married" : "I am not married"}</h1>;
}
root.render(<Greeting />);
