import React from 'react';
import {Carousel, Col, Row, Tabs} from 'antd'
import PCNewsBlock from "./pc_newsblock"
import PCNewsImageBlock from "./pc_news_image_block";

const TabPane = Tabs.TabPane

export default class PCNewsContainer extends React.Component{
    render(){
        const  settings={
            dots:true,
            speed:500,
            slidesToShow: 1,
            infinite: true,
            autoplay:true,
        }

        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className='container'>
                        <div className="leftContainer">
                            <Carousel {...settings} className='carousel'>
                                <div><img src="images/carousel_1.jpg" alt="轮播图片1"/></div>
                                <div><img src="images/carousel_2.jpg" alt="轮播图片2"/></div>
                                <div><img src="images/carousel_3.jpg" alt="轮播图片3"/></div>
                                <div><img src="images/carousel_4.jpg" alt="轮播图片4"/></div>
                            </Carousel>
                            <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab={"头条新闻"} key={"1"}>
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab={"社会"} key={"2"}>
                                <PCNewsBlock count={22} type="shehui" width="100%" bordered="false"/>>
                            </TabPane>
                            <TabPane tab={"国内"} key={"3"}>
                                <PCNewsBlock count={22} type="guonei" width="100%" bordered="false"/>>
                            </TabPane>
                            <TabPane tab={"国际"} key={"4"}>
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>>
                            </TabPane>
                            <TabPane tab={"娱乐"} key={"5"}>
                                <PCNewsBlock count={22} type="yule" width="100%" bordered="false"/>>
                            </TabPane>
                            <TabPane tab={"体育"} key={"6"}>
                                <PCNewsBlock count={22} type="tiyu" width="100%" bordered="false"/>>
                            </TabPane>
                            <TabPane tab={"科技"} key={"7"}>
                                <PCNewsBlock count={22} type="keji" width="100%" bordered="false"/>>
                            </TabPane>
                            <TabPane tab={"财经"} key={"8"}>
                                <PCNewsBlock count={22} type="caijing" width="100%" bordered="false"/>>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
                            <PCNewsImageBlock count={16} type="caijing" width="100%" cartTitle="财经新闻" imageWidth="132px"/>
                        </div>
                    </Col>
                    <Col span={2}></Col>

                </Row>
            </div>
        )
    }
}