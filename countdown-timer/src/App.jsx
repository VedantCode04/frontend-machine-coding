import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [hours, setHours] = useState(0);
  const [min, setmin] = useState(0);
  const [sec, setsec] = useState(0);
  const [submit, setsubmit] = useState(false);
  const [timeRem, settimeRem] = useState(0);

  useEffect(() => {
    const time =
      parseInt(hours, 10) * 60 * 60 +
      parseInt(min, 10) * 60 +
      parseInt(sec, 10);
    settimeRem(time);
    console.log("time = ", timeRem);
  }, [hours, min, sec]);

  useEffect(() => {
    if (timeRem > 0 && submit) {
      var timer = setTimeout(() => {
        settimeRem(timeRem - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [submit, timeRem]);

  const handleReset = () => {
    setHours(0)
    setmin(0)
    setsec(0)
    settimeRem(0)
    setsubmit(false)
  }

  const secs = `${Math.floor(timeRem % 60)}`;
  const totalmins = Math.floor(timeRem / 60);
  const mins = `${Math.floor(totalmins % 60)}`;
  const totalhrs = Math.floor(totalmins / 60);
  const hrs = `${Math.floor(totalhrs % 60)}`;

  return (
    <>
      <div className="main">
        <h1>Countdown timer by Vedant - Machine Coding</h1>
        <span>
          <div>
            <div>
              enter hrs:{" "}
              <input
                type="number"
                onChange={(e) => {
                  console.log("hr = ", e.target.value);
                  setHours(parseInt(e.target.value, 10));
                }}
              />
            </div>
            <div>
              enter mins:{" "}
              <input
                type="number"
                onChange={(e) => {
                  console.log("min = ", e.target.value);
                  setmin(parseInt(e.target.value, 10));
                }}

              />
            </div>
            <div>
              enter secs:{" "}
              <input
                type="number"
                onChange={(e) => {
                  console.log("sec = ", e.target.value);
                  setsec(parseInt(e.target.value, 10));
                }}
              />
            </div>
          </div>
          {hrs.length === 1 ? `0${hrs}` : `${hrs}`} hr :{" "}
          {mins.length === 1 ? `0${mins}` : `${mins}`} min :{" "}
          {secs.length === 1 ? `0${secs}` : `${secs}`} sec
        </span>
        <span>
          <button onClick={() => setsubmit(!submit)}>
            {submit ? "Pause" : "Start"}
          </button>
          <button onClick={handleReset}>
            Reset
          </button>
        </span>
      </div>
    </>
  );
};

export default App;
