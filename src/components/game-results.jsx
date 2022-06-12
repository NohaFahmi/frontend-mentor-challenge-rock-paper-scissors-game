import "../styles/game-results.scss";
import GameChoiceButton from "./game-choice-btn";
import { useSelector, useDispatch, useStore } from "react-redux";
import { useEffect, useState } from "react";
import { gameActions } from "../store/gameReducer";

const GameResults = ({ choicesList, onPlayAgain, choiceLoading }) => {
  const playerChoice = useSelector((state) => state.playerChoice);
  const houseChoice = useSelector((state) => state.houseChoice);
  const playerStatus = useSelector((state) => state.playerStatus);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!choiceLoading) {
      dispatch(gameActions.updateGameScore());
    }
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth);
    });
  }, [choiceLoading, windowWidth]);
  return (
    <>
      {playerChoice !== undefined && choicesList && (
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
          {!choiceLoading && houseChoice !== undefined && playerStatus && (
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
          )}
          <div className="game-results_house-side">
            <h1 className="game-results_title">the house picked</h1>
            {!choiceLoading && houseChoice !== undefined && (
              <div className="house-side_choice">
                <GameChoiceButton
                  choice={choicesList[houseChoice]}
                  width={"300"}
                />
              </div>
            )}
            {choiceLoading && (
              <div className="choices-loader">
                <div className="house-side_choice">
                  <GameChoiceButton choice={choicesList[0]} width={"300"} />
                </div>
                <div className="house-side_choice">
                  <GameChoiceButton choice={choicesList[1]} width={"300"} />
                </div>
                <div className="house-side_choice">
                  <GameChoiceButton choice={choicesList[2]} width={"300"} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default GameResults;
