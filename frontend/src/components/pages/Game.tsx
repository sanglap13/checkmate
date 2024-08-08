import Button from "../shared/Button";
import ChessBoard from "../shared/ChessBoard";

const Game = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-xl w-full">
        <div className="grid grid-cols-6 gap-4 w-full">
          <div className="col-span-4 bg-red-200 w-full">
            <ChessBoard />
          </div>
          <div className="col-span-2 bg-blue-200 w-full">
            <Button onClick={() => {}}>Play</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
