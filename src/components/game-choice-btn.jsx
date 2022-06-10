import "../styles/game-choice-btn.scss";

const GameChoiceButton = ({ choice }) => {
  return (
    <div
      className="game__choice-btn"
      style={{
        backgroundImage: `radial-gradient(${choice.gradiant[0]}, ${choice.gradiant[1]})`,
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
