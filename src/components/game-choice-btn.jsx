import "../styles/game-choice-btn.scss";

const GameChoiceButton = ({ choice, width }) => {
  return (
    <div
      className="game__choice-btn"
      style={{
        backgroundImage: `radial-gradient(${choice.gradiant[0]}, ${choice.gradiant[1]})`,
        width: width ? `${width}px` : "140px",
        height: width ? `${width}px` : "140px",
        padding: width ? "25px" : "15px",
      }}
    >
      <div className="game__choice-btn-content">
        <img
          src={`${process.env.PUBLIC_URL}/images/icon-${choice.name}.svg`}
          alt={choice.name}
        />
      </div>
    </div>
  );
};

export default GameChoiceButton;
