import '../styles/game-header.scss';

const GameHeader = ({score}) => {
    return (
        <div className="game__header">
        <h1 className="game__header_title">
          Rock Paper Scissors
        </h1>
        <div className="game__header_results">
          <p>Score</p>
          <span>12</span>
        </div>
      </div>
    )
}

export default GameHeader;