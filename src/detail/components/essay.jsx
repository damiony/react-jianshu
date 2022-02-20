import React, { PureComponent } from "react";
import { EssayWrap,TitleWrap, ContentWrap, MoreInfo } from "./style";

export default class Essay extends PureComponent {
  render() {
    //   console.log(this.props);
    return (
        <EssayWrap>
            <TitleWrap>{this.props.title}</TitleWrap>
            <ContentWrap dangerouslySetInnerHTML={{__html: this.props.content}}></ContentWrap>
            <MoreInfo>
                <div className="info">更多精彩内容，就在简书APP</div>
                <div className="img"></div>
            </MoreInfo>
        </EssayWrap>
    )
  }
}
