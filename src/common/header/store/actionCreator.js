import * as constants from "./constants.js";

export const handleFocusAction = (flag) => {
  return { type: constants.HEADER_HANDLE_FOCUS, flag };
};
