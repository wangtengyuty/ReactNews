import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from "./js/components/pc_index"
import MediaQuery from 'react-responsive'
import './index.css';
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';
import MobileIndex from "./js/components/mobile_index";


export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <PCIndex/>
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
