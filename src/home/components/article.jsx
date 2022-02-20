import React, { PureComponent, Fragment } from "react";
import { ArticleItem, MetaItem, LoadMore } from "./style";
import { Link } from "react-router-dom";

export default class Article extends PureComponent {
  render() {
    return (
      <Fragment>
        {this.props.articleLists.map((article) => (
          <ArticleItem key={article.id}>
            <Link to={"/detail/" + article.id} className="title">
              {article.title}
            </Link>
            <p className="summary">{article.summary}</p>
            <div className="meta">
              <div className="meta">
                <MetaItem>{article.author}</MetaItem>
                <MetaItem>
                  <span className="iconfont">&#xe67a;</span>
                  {article.comments}
                </MetaItem>
                <MetaItem>
                  <span className="iconfont">&#xf0145;</span>
                  {article.favor}
                </MetaItem>
              </div>
            </div>
          </ArticleItem>
        ))}

        {this.props.curPage < this.props.totalPages ? (
          <LoadMore onClick={() => this.props.loadMoreArticles()}>
            阅读更多
          </LoadMore>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}
