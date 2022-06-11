import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import gameReducer from "./gameReducer";

const store = configureStore({ reducer: gameReducer }, thunk, applyMiddleware);

export default store;
