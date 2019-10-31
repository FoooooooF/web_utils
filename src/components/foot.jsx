import React, { Component } from 'react';
import {Icon} from 'antd';

const shell= window.electron.shell;

class Foot extends Component {
    toGitHub=(e)=>{
        e.preventDefault();
        console.log("123")
        shell.openExternal('https://github.com/FoooooooF/web_utils')
    }
    render(){
        return (
            <span onClick={this.toGitHub.bind(this)}>
                <Icon type="github" style={{ fontSize: '20px',marginRight:'15px'}} />
                欢迎STAR GitHub
            </span>
        );
    }
}
export default Foot;
