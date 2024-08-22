import { useState } from "react";

export const useTicTacToe = () => {
  const initboard = () => Array(9).fill(null);
  const [board, setboard] = useState(initboard());

  const [Xnext, isXnext] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6], 
  ];

  const calculateWinner = (board) => {
    for(let i = 0; i < WINNING_PATTERNS.length; i++){
        const [a,b,c] = WINNING_PATTERNS[i];
        if(board[a] && board[a] == board[b] && board[b] == board[c]){
            return board[a];
        }
    }

    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);

    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = Xnext ? "X" : "O";
    setboard(newBoard);
    isXnext(!Xnext);
  };

  const statusMessage = () => {
     const winner = calculateWinner(board);
     if(winner) return `Player ${winner} wins`;
     if(!board.includes(null)) return "Game Draw";
     return `Player ${Xnext ? "X" : "O"} turn`
  };

  const resetGame = () => {
    setboard(initboard())
    isXnext(true)
  };

  return [board, handleClick, statusMessage, resetGame];
};
