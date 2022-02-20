import styled from "styled-components";
import banner from "../../statics/images/banner.png";
import download from "../../statics/images/download.png";

const textOverflow = `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const HomeBanner = styled.div`
  width: 625px;
  height: 270px;
  margin-bottom: 25px;
  background: url(${banner}) no-repeat center;
  background-size: contain;
`;

export const ArticleItem = styled.div`
  width: 625px;
  padding: 15px 0 20px;
  margin-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;

  .title {
    display: block;
    width: 100%;
    margin-bottom: 4px;
    font-weight: bold;
    color: #2f2f2f;
    font-size: 18px;
    line-height: 1.5;
    ${textOverflow}
  }

  .summary {
    width: 100%;
    margin-bottom: 8px;
    font-size: 13px;
    color: #999;
    line-height: 24px;
  }

  .meta {
    width: 100%;
    height: 20px;
    line-height: 20px;
  }
`;

export const MetaItem = styled.span`
  float: left;
  margin-right: 10px;
  height: 14px;
  color: ${(props) => props.color || "#b4b4b4"};
  font-size: 12px;
  .iconfont {
    font-size: 12px;
  }
`;

export const LoadMore = styled.div`
  width: 625px;
  height: 40px;
  margin: 30px 0 60px;
  padding: 15px 30px;
  background: #a5a5a5;
  border-radius: 20px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
`;

export const BorderItem = styled.div`
  width: 280px;
  height: 56px;
  margin-bottom: 6px;
  background: url(${(props) => props.imgUrl}) no-repeat center center;
  background-size: contain;
`;

export const BorderAd = styled.div`
  width: 280px;
  height: 82px;
  padding: 10px 22px;
  margin-bottom: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;

  .img {
    float: left;
    width: 60px;
    height: 60px;
    background: url(${download}) no-repeat center;
    background-size: contain;
  }
`;

export const BorderAdInfo = styled.div`
  float: left;
  margin-left: 10px;
  padding-top: 10px;
  .title {
    font-size: 15px;
    color: #333;
  }
  .desc {
    margin-top: 10px;
    font-size: 14px;
    color: #999;
  }
`;

export const ToTop = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border: 1px solid rgb(220, 220, 220);
  line-height: 50px;
  text-align: center;
  color: rgb(180,180,180);

  .iconfont {
    font-size: 25px;
  }
`;
