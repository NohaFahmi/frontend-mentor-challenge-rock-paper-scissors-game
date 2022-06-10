import '../styles/game-container.scss';
import GameHeader from './game-header';

const GameContainer = () => {
    return (
        <div className="game__container">
        <GameHeader/>
        {/* <GameStart/>
        <GameResults/> */}
        {/* <div class="game__rules-btn-wrapper">
          <button class="rules-btn">Rules</button>
        </div> */}
      </div>
    )
}
export default GameContainer