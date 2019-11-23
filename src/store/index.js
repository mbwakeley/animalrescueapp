import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import animalsReducer from "./animals/reducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  animals: animalsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
