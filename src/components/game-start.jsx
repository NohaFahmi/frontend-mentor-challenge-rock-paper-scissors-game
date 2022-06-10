import "../styles/game-start.scss";
import GameChoiceButton from "./game-choice-btn";

const GameStart = () => {
  const gameStartBg = `${process.env.PUBLIC_URL}/images/bg-traingle.svg`;
  const gameStartWrapperStyles = {
    backgroundImage: `url(${gameStartBg})`,
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
        <GameChoiceButton
          choice={{
            name: "paper",
            gradiant: ["hsl(230, 89%, 62%)", "hsl(230, 89%, 65%)"],
          }}
        />
        <GameChoiceButton
          choice={{
            name: "scissors",
            gradiant: ["hsl(39, 89%, 49%) ", "hsl(40, 84%, 53%)"],
          }}
        />
      </div>
      <GameChoiceButton
        choice={{
          name: "rock",
          gradiant: ["hsl(349, 71%, 52%)", "hsl(349, 70%, 56%)"],
        }}
      />
    </div>
  );
};

export default GameStart;
