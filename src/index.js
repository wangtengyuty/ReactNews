import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from "./js/components/pc_index"
import './index.css';
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';


export default class Root extends React.Component{
    render(){
        return(
            <div>
                <PCIndex/>
            </div>
        )
    }
}
ReactDOM.render(
    <Root/>
    ,document.getElementById('root'));
registerServiceWorker();
