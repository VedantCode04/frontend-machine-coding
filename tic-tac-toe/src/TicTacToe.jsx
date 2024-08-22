import React, { useState } from "react";

import { useTicTacToe } from "./useTicTacToe";
const TicTacToe = () => {
  const [board, handleClick, statusMessage, resetGame] =
    useTicTacToe();

  return (
    <div className="wrapper">
      <h2>
        {statusMessage()}{" "}
        <button className="reset" onClick={resetGame}>
          Reset
        </button>
      </h2>
      <div className="board">
        {board.map((b, i) => (
          <button className="cell" key={i} onClick={() => handleClick(i)} disabled={b != null}>
            <span>{b}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
