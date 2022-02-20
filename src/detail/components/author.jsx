import React, { Component } from "react";
import { AuthorWrap, AuthorHeader, AuthorInfo } from "./style";

export default class Author extends Component {
  render() {
    //   console.log(this.props);
    return <AuthorWrap>
        <AuthorHeader></AuthorHeader>
        <AuthorInfo>
            <span className=".nickname">{this.props.nickname}</span>
        </AuthorInfo>
    </AuthorWrap>;
  }
}
