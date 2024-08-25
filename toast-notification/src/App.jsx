import React, { useState, useEffect } from "react";
import useToast from "./hooks/useToast";
import "./App.css";
const App = () => {
  const { NotificationComponent, triggerNotification } = useToast("bottom-left");
  return (
    <div className="main">
      <div className="wrapper">
        <h1>toast-notification by Vedant : Machine Coding</h1>

        <span
          onClick={() =>
            triggerNotification({
              type: "success",
              duration: 3000,
              message: "hello vedant",
            })
          }

          className='span'
        >
          Success
        </span>
        <span
          onClick={() =>
            triggerNotification({
              type: "info",
              duration: 3000,
              message: "hello vedant",
            })
          }

          className='span'
        >
          info
        </span>
        <span
          onClick={() =>
            triggerNotification({
              type: "error",
              duration: 3000,
              message: "hello vedant",
            })
          }

          className='span'
        >
          error
        </span>
        <span
          onClick={() =>
            triggerNotification({
              type: "warning",
              duration: 3000,
              message: "hello vedant",
            })
          }

          className='span'
        >
          warning
        </span>
        {NotificationComponent}
      </div>
    </div>
  );
};

export default App;
