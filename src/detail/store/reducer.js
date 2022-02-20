import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  title: "Welcome",
  content: "<p>hello world</p>",
  nickname: "小猪佩奇",
});

const reducer = (preState = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL_INFO:
      return preState.merge({
        title: action.data.title,
        content: action.data.content,
        nickname: action.data.nickname,
      });
    default:
      return preState;
  }
};

export default reducer;
