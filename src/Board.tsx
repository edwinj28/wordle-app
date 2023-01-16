import React, { useState } from "react";

interface BoardProps {
  board: string[][];
  currentRowIndex: number;
  chosenWord: string;
}

const Board: React.FC<BoardProps> = ({
  board,
  currentRowIndex,
  chosenWord,
}) => {
  function handleBgColor(letter: string, letterIndex: number) {
    const foundIndex = chosenWord.indexOf(letter);
    if (foundIndex === -1) return "bg-gray-500";
    if (chosenWord[letterIndex] === letter) return "bg-green-600";
    return "bg-yellow-500";
  }
  return (
    <>
      <div className="flex flex-col gap-1 items-center">
        {board.map((row, rowIndex) => (
          <div className="flex gap-1">
            {row.map((letter, letterIndex) => (
              <div
                className={`flex items-center justify-center border-2 border-gray-500 font-bold text-white text-3xl w-16 h-16 uppercase ${
                  rowIndex < currentRowIndex
                    ? handleBgColor(letter, letterIndex)
                    : ""
                }`}
              >
                <span>{letter}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
