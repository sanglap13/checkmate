import { ChessBoardImg } from "../../assets";

const Home = () => {
  return (
    <div>
      <div className="mt-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={ChessBoardImg} alt="chessboard" className="max-w-96" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">
              Play Chess online on the #2 site!
            </h1>
            <p className="mt-2 text-lg">
              Play chess with your friends or with random people online.
            </p>
            <div className="mt-4">
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
