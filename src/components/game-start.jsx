import "../styles/game-start.scss";
import GameChoiceButton from "./game-choice-btn";
import { gameActions } from "../store/gameReducer";
import { useDispatch } from "react-redux";

const GameStart = ({ onElementSelected, ChoicesList }) => {
  const gameStartBg = `${process.env.PUBLIC_URL}/images/bg-traingle.svg`;
  const gameStartWrapperStyles = {
    backgroundImage: `url(${gameStartBg})`,
  };

  const dispatch = useDispatch();
  const onChooseElement = (elementIndex) => {
    dispatch(gameActions.startGame(elementIndex));
    onElementSelected();
  };
  return (
    <div
      className="game-start__wrapper"
      style={{
        background: `url(${
          process.env.PUBLIC_URL + "/images/bg-triangle.svg"
        }) no-repeat`,
        backgroundSize: "contain",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="choice-wrappers">
        <div
          onClick={() => {
            onChooseElement(0);
          }}
        >
          <GameChoiceButton choice={ChoicesList[0]} />
        </div>
        <div
          onClick={() => {
            onChooseElement(1);
          }}
        >
          <GameChoiceButton choice={ChoicesList[1]} />
        </div>
      </div>
      <div
        onClick={() => {
          onChooseElement(2);
        }}
      >
        <GameChoiceButton choice={ChoicesList[2]} />
      </div>
    </div>
  );
};

export default GameStart;
