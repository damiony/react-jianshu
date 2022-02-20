import { combineReducers } from "redux-immutable";
import { headerReducer } from "../common/header/store";
import { homeReducer } from "../home/store";
import { detailReducer } from "../detail/store";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
});

export default createStore(reducer, applyMiddleware(thunk));
