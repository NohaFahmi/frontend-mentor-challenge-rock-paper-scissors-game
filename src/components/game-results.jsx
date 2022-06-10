import "../styles/game-results.scss";
import GameChoiceButton from "./game-choice-btn";

const GameResults = () => {
  return (
    <div className="game-results">
      <div className="game-results_player-side">
        <h1 className="game-results_title">you picked</h1>
        <div className="player-side_choice">
          <GameChoiceButton
            choice={{
              name: "paper",
              gradiant: ["hsl(230, 89%, 62%)", "hsl(230, 89%, 65%)"],
            }}
            width={"300"}
          />
        </div>
      </div>
      <div className="game-results_result">
        <h2 className="game-results_result_title">you win</h2>
        <button className="game-results_result_play-again-btn">
          play again
        </button>
      </div>
      <div className="game-results_house-side">
        <h1 className="game-results_title">the house picked</h1>
        <div className="house-side_choice">
          <GameChoiceButton
            choice={{
              name: "scissors",
              gradiant: ["hsl(39, 89%, 49%) ", "hsl(40, 84%, 53%)"],
            }}
            width={"300"}
          />
        </div>
      </div>
    </div>
  );
};
export default GameResults;
