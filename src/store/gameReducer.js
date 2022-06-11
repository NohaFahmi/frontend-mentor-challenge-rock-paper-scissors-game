import { createSlice } from "@reduxjs/toolkit";

const gameInitialState = {
  playerChoice: undefined,
  houseChoice: undefined,
  score: 0,
  playerStatus: undefined,
};
// - Paper beats Rock
// - Rock beats Scissors
// - Scissors beats Paper

const gameChoicesList = ["paper", "scissors", "rock"];
const gameSlice = createSlice({
  name: "game",
  initialState: gameInitialState,
  reducers: {
    startGame(state, action) {
      state.playerChoice = action.payload;
    },
    pickRandomChoiceForHouse(state) {
      state.houseChoice = Math.floor(Math.random() * gameChoicesList.length);
    },
    updateGameScore(state) {
      switch (gameChoicesList[state.playerChoice]) {
        case "paper":
          if (gameChoicesList[state.houseChoice] === "rock") {
            state.score++;
            state.playerStatus = "win";
          } else if (gameChoicesList[state.houseChoice] === "paper") {
            state.playerStatus = "draw";
          } else if (gameChoicesList[state.houseChoice] === "scissors") {
            state.playerStatus = "lost";
          }
          return state;
          break;
        case "rock":
          if (gameChoicesList[state.houseChoice] === "paper") {
            state.playerStatus = "lost";
          } else if (gameChoicesList[state.houseChoice] === "rock") {
            state.playerStatus = "draw";
          } else if (gameChoicesList[state.houseChoice] === "scissors") {
            state.playerStatus = "win";
            state.score++;
          }
          return state;
          break;
        case "scissors":
          if (gameChoicesList[state.houseChoice] === "paper") {
            state.score++;
            state.playerStatus = "win";
          } else if (gameChoicesList[state.houseChoice] === "scissors") {
            state.playerStatus = "draw";
          } else if (gameChoicesList[state.houseChoice] === "rock") {
            state.playerStatus = "lost";
          }
          return state;

        default:
          return state;
      }
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
