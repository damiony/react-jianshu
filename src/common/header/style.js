import styled from "styled-components";
import logo from "../../statics/images/logo.png";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 56px;
  background: #fff;
  border-width: 0 0 1px;
  border-color: #f0f0f0;
  border-style: solid;

  &:after {
    content: "";
    display: block;
    clear: both;
    /* visibility: hidden; */
  }
`;

export const HeaderWrap = styled.div`
  width: 1440px;
  height: 56px;
  margin: 0 auto;
`;

export const HeaderLogo = styled.a`
  float: left;
  width: 240px;
  height: 56px;
  background: url(${logo}) no-repeat;
  background-size: contain;
`;

export const HeaderNav = styled.div`
  float: left;
  width: 960px;
  height: 56px;
  .iconfont {
    font-size: 20px;
    margin-right: 5px;
  }
`;

export const NavItem = styled(Link)`
  height: 56px;
  line-height: 56px;
  text-align: center;
  color: ${(props) => props.color || "#333"};
  font-size: 17px;

  &.left {
    float: left;
    margin-right: 10px;
    padding: 0px 15px;
  }

  &.right {
    float: right;
    padding: 0px 10px;
    color: #969696;

    .iconfont {
      font-size: 25px;
    }
  }
`;

export const HeaderSearch = styled.div`
  position: relative;
  float: left;
  height: 56px;
`;

export const SearchInput = styled.input`
  width: 240px;
  height: 38px;
  margin-top: 9px;
  margin-left: 15px;
  padding: 0 40px 0 20px;
  font-size: 14px;
  background: #eee;
  outline: none;
  border: 1px solid #eee;
  border-radius: 40px;

  &.focused {
    width: 320px;
  }

  &.slide-enter {
    transition: all 0.2s;
  }
  &.slide-enter-active,
  &.slide-enter-done {
    width: 320px;
  }

  &.slide-exit {
    transition: all 0.2s;
  }
  &.slide-exit-active,
  &.slide-exit-done {
    width: 240px;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 4px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  color: #969696;
  background: transparent;
  cursor: pointer;

  &.focused {
    background: #969696;
    color: #fff;
  }
`;

export const HeaderAside = styled.div`
  float: left;
  width: 240px;
  height: 56px;
`;

export const AsideBtn = styled.a.attrs({
  href: "#",
})`
  float: right;
  height: 40px;
  margin: 8px 10px;
  padding: 0px 12px;
  font-size: 15px;
  text-align: center;
  border-radius: 20px;

  &.signup {
    width: 80px;
    line-height: 40px;
    color: #ea6f5a;
    border: 1px solid #ea6f5a;
  }
  &.writting {
    width: 100px;
    background: #ea6f5a;
    line-height: 38px;
    color: #fff;
    border: 1px solid #ea6f5a;
  }
`;
