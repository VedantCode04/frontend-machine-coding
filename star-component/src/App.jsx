import React, { useState , useEffect} from "react";
import "./App.css";
const App = () => {
  const [starvalue, setstarvalue] = useState(0);
  const [hover, sethover] = useState(0);

  const handleStar = (e, value) => {
    setstarvalue(value);
  }

  const handleHover = (value, bool) => {
    sethover(bool ? value : starvalue);
  }

  return (
    <div className="main">
      <h1>Star Rating by Vedant - Machine Coding Practice</h1>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={value <= hover ? "star-blue" : "star"}
            onClick={(e) => handleStar(e, value)}
            onMouseEnter={() => handleHover(value, 1)}
            onMouseLeave={() => handleHover(value, 0)}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
