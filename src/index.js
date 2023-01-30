import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  return (
    <div>
      <h1>This is a component</h1>
      <p>Lorem 123</p>
    </div>
  );
}
root.render(
  <h1>
    <Greeting />
  </h1>
);
