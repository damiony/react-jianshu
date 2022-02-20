import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import {
  HeaderDiv,
  HeaderLogo,
  HeaderWrap,
  NavItem,
  HeaderSearch,
  SearchInput,
  SearchBtn,
  HeaderNav,
  HeaderAside,
  AsideBtn,
} from "./style";

function Header(props) {
  const { focused, handleFocus } = props;
  return (
    <HeaderDiv>
      <HeaderWrap>
        <HeaderLogo href="/"></HeaderLogo>
        <HeaderNav>
          <NavItem to="/" color="#ea6f5a" className="left">
            <span className="iconfont">&#xf288;</span>首页
          </NavItem>
          <NavItem to="/" className="left">
            <span className="iconfont">&#xe589;</span>下载App
          </NavItem>
          <NavItem to="/" className="left">
            <span className="iconfont">&#xe642;</span>会员
          </NavItem>
          <NavItem to="/" className="left">
            <span className="iconfont">&#xe65a;</span>IT技术
          </NavItem>
          <NavItem to="/" className="right">
            登录
          </NavItem>
          <NavItem to="/" className="right">
            <span className="iconfont">&#xe6c5;</span>
          </NavItem>

          <HeaderSearch>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <SearchInput
                placeholder="搜索"
                className={focused ? "focused" : ""}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
              />
            </CSSTransition>
            <SearchBtn className={focused ? "focused iconfont" : "iconfont"}>
              <span className="iconfont">&#xe67d;</span>
            </SearchBtn>
          </HeaderSearch>
        </HeaderNav>
        <HeaderAside>
          <AsideBtn className="writting">
            <span className="iconfont">&#xf00f5;</span>写文章
          </AsideBtn>
          <AsideBtn className="signup">注册</AsideBtn>
        </HeaderAside>
      </HeaderWrap>
    </HeaderDiv>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.get("header").get("focused"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(flag) {
      dispatch(actionCreator.handleFocusAction(flag));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
