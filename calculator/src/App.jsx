import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [expression, setexpression] = useState("");
  const calcnumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
  ];

  const handleClick = (val) => {
    if (expression === "Error: Division by zero" || expression === "Error") {
      setexpression(val);
    } else {
      setexpression(expression + val);
    }
  };

  const handleSubmit = () => {
    try {
      let answer = eval(expression);
      if (answer === Infinity || answer === -Infinity) {
        setexpression("Error: Division by zero");
      } else {
        setexpression(answer.toString());
      }
    } catch (error) {
      setexpression("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator by Vedant - Machine Coding</h1>
      <div className="display">{expression}</div>
      <div className="button-grid">
        {calcnumbers.map((num) => (
          <button key={num} className="button" onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}

        <button className="button submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
