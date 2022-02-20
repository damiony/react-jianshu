import React, { PureComponent } from "react";
import { HomeWrap, HomeLeft, HomeRight } from "./style";
import Banner from "./components/banner";
import ArticleLists from "./components/article";
import Border from "./components/border";
import Scroll from "./components/scroll";
import { connect } from "react-redux";
import { actionCreator } from "./store";

class Home extends PureComponent {
  render() {
    return (
      <HomeWrap>
        <HomeLeft>
          <Banner />
          <ArticleLists
            totalPages={this.props.totalPages}
            curPage={this.props.curPage}
            articleLists={this.props.articleLists}
            loadMoreArticles={this.props.loadMoreArticles}
          />
        </HomeLeft>
        <HomeRight>
          <Border></Border>
        </HomeRight>
        <Scroll />
      </HomeWrap>
    );
  }

  componentDidMount() {
    this.props.initHomeData();
    this.props.queryArtileLists();
  }
}

const mapStateToProps = (state) => ({
  totalPages: state.getIn(["home", "totalPages"]),
  curPage: state.getIn(["home", "curPage"]),
  articleLists: state.getIn(["home", "articleLists"]),
});

const mapDispatchToProps = (dispatch) => ({
  initHomeData() {
    dispatch(actionCreator.initHomeData);
  },
  queryArtileLists() {
    dispatch(actionCreator.queryArticleLists);
  },
  loadMoreArticles() {
    dispatch(actionCreator.loadMoreArticles);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
