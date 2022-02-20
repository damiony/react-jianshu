import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  focused: false,
});

export const reducer = (preState = defaultState, action) => {
  switch (action.type) {
    case constants.HEADER_HANDLE_FOCUS:
      return preState.set("focused", action.flag);
    default:
      return preState;
  }
};
