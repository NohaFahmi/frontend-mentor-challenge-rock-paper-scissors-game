import "../styles/game-start.scss";

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
        <div className="game-start__wrapper_paper_choice choice-btn">
          <div className="game-start__wrapper_paper choice-btn-content">
            <img
              src={process.env.PUBLIC_URL + "/images/icon-paper.svg"}
              alt="paper"
            />
          </div>
        </div>
        <div className="game-start__wrapper_scissors_choice choice-btn">
          <div className="game-start__wrapper_scissors choice-btn-content">
            <img
              src={process.env.PUBLIC_URL + "/images/icon-scissors.svg"}
              alt="scissors"
            />
          </div>
        </div>
      </div>
      <div className="game-start__wrapper_rock_choice choice-btn">
        <div className="game-start__wrapper_rock choice-btn-content">
          <img
            src={process.env.PUBLIC_URL + "/images/icon-rock.svg"}
            alt="rock"
          />
        </div>
      </div>
    </div>
  );
};

export default GameStart;
