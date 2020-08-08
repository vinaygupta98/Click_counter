import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setcount] = useState(0);

  const INC = () => {
    setcount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={INC}>Click Me</button>
    </>
  );
};

export default App;
