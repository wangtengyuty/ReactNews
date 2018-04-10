import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from "./js/components/pc_index"
import PCDetail from "./js/components/pc_news_detail"
import MediaQuery from 'react-responsive'
import './index.css';
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';
import MobileIndex from "./js/components/mobile_index";
import {BrowserRouter as Router,Route} from "react-router-dom"


export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <Router>
                        <div>
                            <Route path="/" component={PCIndex}/>
                            <Route path="/details/:uniquekey" component={PCDetail}/>
                        </div>
                    </Router>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <MobileIndex/>
                </MediaQuery>
            </div>
        )
    }
}
ReactDOM.render(
    <Root/>
    ,document.getElementById('root'));
registerServiceWorker();
