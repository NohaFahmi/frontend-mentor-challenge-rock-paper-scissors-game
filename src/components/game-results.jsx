import "../styles/game-results.scss";
import GameChoiceButton from "./game-choice-btn";
import { useSelector, useDispatch, useStore } from "react-redux";
import { useEffect } from "react";
import { gameActions } from "../store/gameReducer";
const GameResults = ({ choicesList, onPlayAgain }) => {
  const playerChoice = useSelector((state) => state.playerChoice);
  const houseChoice = useSelector((state) => state.houseChoice);
  const playerStatus = useSelector((state) => state.playerStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameActions.updateGameScore());
  }, []);

  return (
    playerChoice !== undefined &&
    houseChoice !== undefined &&
    choicesList && (
      <div className="game-results">
        <div className="game-results_player-side">
          <h1 className="game-results_title">you picked</h1>
          <div className="player-side_choice">
            <GameChoiceButton
              choice={choicesList[playerChoice]}
              width={"300"}
            />
          </div>
        </div>
        <div className="game-results_result">
          <h2 className="game-results_result_title">
            {playerStatus === "win"
              ? "you win"
              : playerStatus === "draw"
              ? "you draw"
              : playerStatus === "lost"
              ? "you lost"
              : ""}
          </h2>
          <button
            className="game-results_result_play-again-btn"
            onClick={onPlayAgain}
          >
            play again
          </button>
        </div>
        <div className="game-results_house-side">
          <h1 className="game-results_title">the house picked</h1>
          <div className="house-side_choice">
            <GameChoiceButton choice={choicesList[houseChoice]} width={"300"} />
          </div>
        </div>
      </div>
    )
  );
};
export default GameResults;
