import React from 'react';
import {
        Container,
        Slider,
        Grid,
        Col,
        Gallery,
        Icon
} from 'amazeui-react';
var data = [
        {
                img: '/images/index_banner.png'
        },
        {
                img: '/images/index_banner.png'
        }];
var gameData = [
        {
                "img": "/images/game1.png",
                "title": "保卫萝卜"
        },
        {
                "img": "/images/game2.png",
                "title": "植物大战僵尸"
        },
        {
                "img": "/images/game1.png",
                "title": "保卫萝卜"
        },
        {
                "img": "/images/game2.png",
                "title": "植物大战僵尸"
        },
        {
                "img": "/images/game2.png",
                "title": "保卫萝卜"
        },
        {
                "img": "/images/game1.png",
                "title": "植物大战僵尸"
        },
        {
                "img": "/images/game2.png",
                "title": "保卫萝卜"
        },
        {
                "img": "/images/game1.png",
                "title": "植物大战僵尸"
        }
];
const Home = React.createClass({
        renderSlider(){
                return (
                        <Slider theme="a5">
                                {data.map(function (item, i) {
                                        return (
                                                <Slider.Item key={i}>
                                                        <img src={item.img}/>
                                                </Slider.Item>
                                        );
                                })}
                        </Slider>
                )
        },
        renderGame(){
                return (
                        <div>
                                <Container className="title-layer game">
                                        <Col sm={1} className="am-text-middle circle">
                                                <Icon icon="circle" className="text-warning"></Icon>
                                        </Col>
                                        <Col sm={11} className="banner">
                                                <h1>热门游戏</h1>
                                        </Col>
                                </Container>
                                <Grid>
                                        <Col sm={11} smOffset={1}>
                                                <Gallery sm={4} className="game-list" data={gameData}/>
                                        </Col>
                                </Grid>
                        </div>
                )
        },
        render() {
                return (
                        <div>
                                {this.renderSlider()}
                                {this.renderGame()}
                        </div>
                );
        }
});

export default Home;