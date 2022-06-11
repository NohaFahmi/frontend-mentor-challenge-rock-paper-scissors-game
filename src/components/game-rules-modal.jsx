import "../styles/game-rules-modal.scss";

const GameRulesModal = ({ closeModal }) => {
  return (
    <div className="game-rules-modal">
      <div className="game-rules-modal_header">
        <h1 className="game-rules-modal_title">rules</h1>
        <button className="game-rules-modal_close-btn" onClick={closeModal}>
          <img
            src={process.env.PUBLIC_URL + "/images/icon-close.svg"}
            alt="icon-close"
          />
        </button>
      </div>
      <div className="game-rules-modal_img">
        <img
          src={process.env.PUBLIC_URL + "/images/image-rules.svg"}
          alt="game-rules"
        />
      </div>
    </div>
  );
};
export default GameRulesModal;
