import styled from "styled-components";
import headImg from "../../statics/images/head.webp";
import download from "../../statics/images/download.png";

export const EssayWrap = styled.div`
  float: left;
  width: 730px;
  padding: 32px;
  margin-bottom: 10px;
  background: #fff;
`;

export const TitleWrap = styled.div`
  width: 100%;
  margin: 32px 0 40px;
  font-size: 30px;
  color: #404040;
`;

export const ContentWrap = styled.div`
  width: 100%;
  margin-bottom: 40px;
  font-size: 16px;
  color: #404040;
  line-height: 1.8;

  p {
    margin-bottom: 60px;
  }
`;

export const MoreInfo = styled.div`
  width: 100%;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;

  .info {
    padding: 20px 0 10px;
    font-size: 16px;
    color: #ea6f5a;
    font-weight: bold;
    text-align: center;
  }

  .img {
    width: 110px;
    height: 110px;
    padding: 5px;
    margin: 10px 0 15px;
    margin-left: calc((100% - 110px) / 2);
    background: url(${download}) no-repeat center;
    background-size: contain;
  }
`;

export const AuthorWrap = styled.div`
  float: right;
  width: 260px;
  padding: 16px;
  margin-bottom: 10px;
  overflow: hidden;
  background: #fff;
`;

export const AuthorHeader = styled.div`
  float: left;
  width: 45px;
  height: 45px;
  background: url(${headImg}) no-repeat center center;
  background-size: contain;
  border-radius: 50%;
`;

export const AuthorInfo = styled.div`
  float: left;
  height: 45px;
  margin-left: 10px;
  line-height: 45px;

  .nickname {
    font-size: 14px;
    color: #2d2d2d;
  }
`;
