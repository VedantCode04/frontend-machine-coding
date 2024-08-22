import React, { useState } from "react";
import "./App.css"
import TicTacToe from "./TicTacToe";

const App = () => {

  return (
    <div className='main'>
      <h1>Tic-tac-toe by Vedant : Machine Coding</h1>
      <TicTacToe/>
    </div>
  );
}

export default App