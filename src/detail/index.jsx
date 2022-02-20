import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { DetailDiv, DetailWrap } from "./style";
import Essay from "./components/essay";
import Author from "./components/author";
import { actionCreator } from "./store";

function Detail(props) {
  const { id } = useParams();

  useEffect(() => {
    props.changeDetailInfo(id);
  });

  return (
    <DetailDiv>
      <DetailWrap>
        <Essay title={props.title} content={props.content}></Essay>
        <Author nickname={props.nickname}></Author>
      </DetailWrap>
    </DetailDiv>
  );
}

const mapStateToProps = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
  nickname: state.getIn(["detail", "nickname"])
});

const mapDispatchToProps = (dispatch) => ({
  changeDetailInfo(id) {
    dispatch(actionCreator.changeDetailInfo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
