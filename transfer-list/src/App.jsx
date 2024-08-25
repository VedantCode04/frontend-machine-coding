import React, { useState, useEffect } from "react";
import { data } from "./data.js";
import "./App.css";
const App = () => {
  const [listdata, setListdata] = useState(data);

  const handleClick = (id) => {
    let newList = listdata.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }

      return item;
    });

    setListdata(newList);
  };

  const handleSubmit = (side) => {
    const newList = listdata.map((item) => {
      if (item.selected) {
        return { ...item, isLeft: "left" == side, selected: !item.selected };
      }

      return item;
    });

    setListdata(newList);
  };
  return (
    <div className="main">
      <div className="wrapper">
        <h1>Transfer List by Vedant : Machine Coding</h1>
        <div className="content">
          <div className="left">
            <h1>Left</h1>
            {listdata
              .filter((item) => (item.isLeft ? true : false))
              .map((item, index) => (
                <div
                  className="item"
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  style={{
                    background: `${item.selected ? "#89CFF0" : ""}`,
                  }}
                >
                  {item.data}
                </div>
              ))}
          </div>
          <div className="btns">
            <button onClick={() => handleSubmit("left")}>left</button>
            <button onClick={() => handleSubmit("right")}>right</button>
          </div>
          <div className="right">
            <h1>Right</h1>
            {listdata
              .filter((item) => (item.isLeft ? false : true))
              .map((item, index) => (
                <div
                  className="item"
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  style={{
                    background: `${item.selected ? "#89CFF0" : ""}`,
                  }}
                >
                  {item.data}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
