import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import {Card} from 'antd'

export default class PCNewsImageBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ""
        }
    }

    componentWillMount() {
        var myFetchOptions = {
            method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count+"&key=478fce1495f0f2d9814d1459b2a6f077", myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({
                news: json
            }))
    }


    render() {
        const styleImage = {
            display: "block",
            width: this.props.imageWidth,
            height: "90px"
        };
        const styeH3 = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        };

        const {news} = this.state
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <div key={index} className="imageblock">
                    <Router>
                        <Link to={`details/${newsItem.uniquekey}` } target={"_blank"}>
                            <div className="custom-image">
                                <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
                            </div>
                            <div className="custom-card">
                                <h3 style={styeH3}>{newsItem.title}</h3>
                                <p>{newsItem.author_name}</p>
                            </div>
                        </Link>
                    </Router>
                </div>
            ))
            : "没有加载到任何新闻";
        return (
        <div className="topNewsList">
            <Card title={this.props.cartTitle} bordered={true} style={{
                width: this.props.width
            }}>
                {newsList}
            </Card>
        </div>
        )
    }
}