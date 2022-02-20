import React, { PureComponent, Fragment } from 'react'
import {BorderItem, BorderAd, BorderAdInfo} from "./style"
import dailyImg from "../../statics/images/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"
import clubImg from "../../statics/images/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
import seriImg from "../../statics/images/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
import crImg from "../../statics/images/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"

export default class Border extends PureComponent {
  render() {
    return (
        <Fragment>
            <BorderItem imgUrl={dailyImg}></BorderItem>
            <BorderItem imgUrl={clubImg}></BorderItem>
            <BorderItem imgUrl={seriImg}></BorderItem>
            <BorderItem imgUrl={crImg}></BorderItem>
            <BorderAd>
                <div className="img"></div>
                <BorderAdInfo>
                    <p className="title">下载简书手机App</p>
                    <p className="desc">随时随地发现和创作内容</p>
                </BorderAdInfo>
            </BorderAd>
        </Fragment>
    )
  }
}
