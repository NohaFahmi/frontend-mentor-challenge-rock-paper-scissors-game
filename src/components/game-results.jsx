import '../styles/game-results.scss';

const GameResults = () => {
    return (
        <div class="game__game-screen_wrapper">
        <div class="game__game-screen_wrapper_player-side">
          <h2>you picked</h2>
          <div class="player-side_choice">
            <img src="./images/icon-scissors.svg" alt="scissors"/>
          </div>
        </div>
      </div>
    )
}
export default GameResults;