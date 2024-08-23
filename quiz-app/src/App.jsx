import React, { useState, useEffect } from "react";
import "./App.css";

import { quizData } from "./data";
const App = () => {
  const [item, setitem] = useState(0);
  const [score, setscore] = useState(0);
  const [submit, setsubmit] = useState(0);
  const [click, setclick] = useState(0)

  const [quizList, setquizList] = useState(quizData);

  const updateItem = (option) => {
    const updatedlist = quizList.map((quiz, index) => {
      if (index === item) {
        return {
          ...quiz,
          userAnswer: option,
        };
      }

      return quiz;
    });
    setquizList(updatedlist);
  };

  useEffect(() => {
    console.log(quizList);
  }, [quizList]);

  const quizDataItem = quizList[item];

  const checkAnswer = (option) => {
    setclick(1)
    if (option == quizDataItem.correctAnswer) {
      updateItem(item, option);
      setscore(score + 1);
    }

    updateItem(option);
  };

  const setclassname = (quizDataItem, option, click) => {
    if (submit == 0 ) return "";
    const correct = quizDataItem.correctAnswer;
    const userAns = quizDataItem.userAnswer;

    if (option == correct) {
      return "span-green";
    } else if (option == userAns) {
      return "span-red";
    } else if (userAns == "") return "";
  };

  const viewAnswers = () => {
    setitem(0);
    setsubmit(2);
  };

  useEffect(() => {
    setclick(0)
  }, [])
  

  return (
    <div className="main">
      <div className="wrapper">
        <h1 className="heading">Fully Functional Quiz App by Vedant</h1>
        {submit == 1 ? (
          <>
            <h1>Final score = {score} </h1>
            <button onClick={viewAnswers} className="span-btn"> View Answers</button>
          </>
        ) : (
          <>
            <div className="question">
              <h1>{quizDataItem.question}</h1>
              <div className="options">
                {quizDataItem.options.map((option, index) => (
                  <span
                    key={index}
                    onClick={() => checkAnswer(option)}
                    className={`${setclassname(
                      quizDataItem,
                      option, click
                    )} span-btn `}
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>

            <div className="btn">
              {item < quizData.length - 1 ? (
                <button className="next-btn" onClick={() => setitem(item + 1)}>
                  Next
                </button>
              ) : (
                <button className="submit-btn" onClick={() => setsubmit(1)}>
                  Submit
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
