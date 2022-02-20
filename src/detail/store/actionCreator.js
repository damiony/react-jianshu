import * as constants from "./constants";
import axios from "axios";

const detailInfoAction = (data) => ({
  type: constants.CHANGE_DETAIL_INFO,
  data,
});

export const changeDetailInfo = (id) => {
  return (dispatch) => {
    axios.get("/api/detail/" + id + ".json").then((response) => {
        // console.log(response.data);
      dispatch(detailInfoAction(response.data.data));
    }).catch(() => {
        console.log("fail");
    });
  };
};
