import { Color, PieceSymbol, Square } from "chess.js";
import React from "react";

const ChessBoard = ({
  board,
}: {
  board: ({
    square: Square;
    color: Color;
    type: PieceSymbol;
  } | null)[][];
}) => {
  return (
    <div className="text-white-200">
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              return (
                <div
                  key={j}
                  className={`w-8 h-8 flex justify-center items-center ${
                    (i + j) % 2 === 0 ? "bg-[#d18b47]" : "bg-[#ffce9e]"
                  }`}
                >
                  {square ? square.type : ""}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ChessBoard;
