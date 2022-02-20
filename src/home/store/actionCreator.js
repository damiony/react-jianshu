import * as constants from "./constants";
import axios from "axios";

const articleListsAction = (data) => ({
  type: constants.HOME_ARTICLE_LISTS,
  data,
});

const moreArticlesAction = (data) => ({
  type: constants.LOAD_MORE_ARtiCLES,
  data,
});

const homeDataAction = (data) => ({
  type: constants.HOME_INIT_DATA,
  data,
});

export const initHomeData = (dispatch) => {
  axios.get("/api/home.json").then((response) => {
    dispatch(homeDataAction(response.data.data.totalPages));
  });
};

export const queryArticleLists = (dispatch) => {
  axios.get("/api/articleLists.json").then((response) => {
    dispatch(articleListsAction(response.data.data));
  });
};

export const loadMoreArticles = (dispatch) => {
  axios.get("/api/moreArticles.json").then((response) => {
    dispatch(moreArticlesAction(response.data.data));
  });
};
