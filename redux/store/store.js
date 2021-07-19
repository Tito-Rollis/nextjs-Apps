import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import auth from "./reducers/auth";
import game from "./reducers/game";
import profile from "./reducers/profile";

const composeEnhancer = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({auth, game, profile});
export default createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
