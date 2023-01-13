import React from "react";

const keys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "BS"],
];

interface Props {
  handleInput: (input: string) => void;
}

const Keyboard: React.FC<Props> = ({ handleInput }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      {keys.map((row) => (
        <div className="flex gap-1">
          {row.map((letter) => (
            <button className="uppercase" onClick={() => handleInput(letter)}>
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
