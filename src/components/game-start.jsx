import '../styles/game-start.scss';

const GameStart = () => {
    return (
        <div class="game__wrapper">
        <div class="game__wrapper_paper">
          <img src="./images/icon-paper.svg" alt="paper"/>
        </div>
        <div class="game__wrapper_scissors">
          <img src="./images/icon-scissors.svg" alt="scissors"/>
        </div>
        <div class="game__wrapper_rock">
          <img src="./images/icon-rock.svg" alt="rock"/>
        </div>
      </div>
    )
}

export default GameStart;