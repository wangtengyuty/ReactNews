import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import {Card} from 'antd'

export default class PCNewsBlock extends React.Component {
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
        const {news} = this.state
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <li key={index}>
                    <Router>
                        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                            {newsItem.title}
                        </Link>
                    </Router>
                </li>
            ))
            : "没有加载到任何新闻"
        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}