import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import numberReducer from "./reducers";

const rootReducer = combineReducers({
  numberReducer: numberReducer,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
