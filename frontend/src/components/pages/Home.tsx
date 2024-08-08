import { useNavigate } from "react-router-dom";
import { ChessBoardImg } from "../../assets";
import Button from "../shared/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={ChessBoardImg} alt="chessboard" className="max-w-96" />
          </div>
          <div className="pt-16">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold text-white">
                Play Chess online on the #2 site!
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="mt-2 text-lg text-slate-400">
                Play chess with your friends or with random people online.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Button onClick={() => navigate("/game")}>Play Online</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
