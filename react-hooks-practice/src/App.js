import React, { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const STARTING_TIME = 5;

  const [textData, setData] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;

    setData(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter(word => word !== "");
    // console.log(filteredWords.length);
    return filteredWords.length;
  }

  function startTimer() {
    setTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setData("");
    textRef.current.disabled = false;
    textRef.current.focus();
  }

  function stopTimer() {
    setTimeRunning(false);
    setWordCount(calculateWordCount(textData));
  }

  useEffect(() => {
    if (isTimeRunning === true && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      stopTimer();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textRef}
        value={textData}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />

      <h4>Time remaining : {timeRemaining}</h4>
      {/* <button onClick={() => startTimer()}>Start game</button> */}
      <button onClick={startTimer} disabled={isTimeRunning}>
        Start game
      </button>
      <h1>Word Count is {wordCount} </h1>
    </>
  );
}

export default App;
