import { Map } from "immutable";
import * as constants from "./constants";

const defaultState = Map({
  totalPages: 0,
  curPage: 0,
  articleLists: [],
});

export const reducer = (preState = defaultState, action) => {
  switch (action.type) {
    case constants.HOME_INIT_DATA:
      return preState.merge({
        totalPages: action.data,
      });
    case constants.HOME_ARTICLE_LISTS:
      return preState.merge({
        articleLists: action.data,
        curPage: preState.get("curPage") + 1,
      });
    case constants.LOAD_MORE_ARtiCLES:
      return preState.merge({
        articleLists: preState
          .get("articleLists")
          .concat(action.data),
        curPage: preState.get("curPage") + 1,
      });
    default:
      return preState;
  }
};
