import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Board from "./Board";
import Keyboard from "./Keyboard";

const initialBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const chosenWord = "fetch";

function App() {
  const [board, setBoard] = useState<string[][]>(initialBoard);
  //const [currentWord, setCurrentWord] = useState<string>("");
  const [currentRowIndex, setCurrentRowIndex] = useState<number>(0);
  const [currentColIndex, setCurrentColIndex] = useState<number>(0);

  const handleInput = (input: string) => {
    const boardCopy = [...board];

    if (input === "BS") {
      console.log("BS", input);
      boardCopy[currentRowIndex][currentColIndex - 1] = "";
      setBoard(boardCopy);
      currentColIndex > 0
        ? setCurrentColIndex(currentColIndex - 1)
        : setCurrentColIndex(0);
      return;
    }

    if (input === "Enter") {
      currentRowIndex < initialBoard.length
        ? setCurrentRowIndex(currentRowIndex + 1)
        : "";
      setCurrentColIndex(0);
      return;
    }

    boardCopy[currentRowIndex][currentColIndex] = input;
    setBoard(boardCopy);
    setCurrentColIndex(currentColIndex + 1);
  };
  return (
    <div className="container flex flex-col h-full">
      <div className="flex justify-center items-center flex-grow">
        <Board
          board={board}
          currentRowIndex={currentRowIndex}
          chosenWord={chosenWord}
        />
      </div>
      <Keyboard handleInput={handleInput} />
    </div>
  );
}

export default App;
