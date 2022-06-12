import "../styles/game-header.scss";

const GameHeader = ({ score }) => {
  return (
    <div className="game__header">
      <h1 className="game__header_title">
        <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo" />
      </h1>
      <div className="game__header_results">
        <p>Score</p>
        <span>{score}</span>
      </div>
    </div>
  );
};

export default GameHeader;
