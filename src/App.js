import React, { useState } from "react";
import Board from "./Board";
import "./styles.css";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  let [step, setStep] = useState(0);

  function handleClick(i) {
    history[i] = step ? "X" : "O";
    setStep(!step);
    setHistory(history);

    console.log(history);

    console.log("Insidee", i);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board history={history} onClick={handleClick} />
      </div>
    </div>
  );
}
