import { useEffect, useState } from "react";
import { useSocket } from "../../hooks/useSocket";
import Button from "../shared/Button";
import ChessBoard from "../shared/ChessBoard";
import { Chess } from "chess.js";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

const Game = () => {
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      switch (message.type) {
        case INIT_GAME:
          setChess(new Chess());
          setBoard(chess.board());
          console.log("Game initialized");
          break;
        case MOVE:
          const move = message.payload;
          chess.move(move);
          setBoard(chess.board());
          console.log("Move made");
          break;
        case GAME_OVER:
          console.log("Game over");
          break;
        default:
          console.error("Unknown message type:", message.type);
      }
    };

    // return () => {
    //   socket.onmessage = null;
    // };
  }, [socket]);

  if (!socket) return <div>Connecting to Opponent...</div>;

  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-xl w-full">
        <div className="grid grid-cols-6 gap-4 w-full">
          <div className="col-span-4 bg-red-200 w-full">
            <ChessBoard board={board} />
          </div>
          <div className="col-span-2 bg-blue-200 w-full">
            <Button
              onClick={() =>
                socket.send(
                  JSON.stringify({
                    type: INIT_GAME,
                  })
                )
              }
            >
              Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
