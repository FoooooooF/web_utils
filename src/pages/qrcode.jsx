import React , {Component} from 'react';
import { Input,Button,message } from 'antd';
import QRCode from 'qrcode';

class Qrcode extends Component {
    constructor(props){
        super(props);
        this.state={
            content:"",
            qr:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        }
        this.handleChange = this.handleChange.bind(this);
        this.getQrcode = this.getQrcode.bind(this);
    }
    handleChange(event) {
        this.setState({content: event.target.value});
    }
    getQrcode(){
        let content=this.state.content;
        if(!!content){
            QRCode.toDataURL(this.state.content,{type:'terminal'}, (err, url)=> {
                console.log(url)
                this.setState({qr:url});
            })
        }else{
            message.error('输入内容不能为空！');
        }
    }
    render(){
        return (
            <div className="qr">
                <div className="qr-input">
                    <Input placeholder="请输入内容" value={this.state.content} onChange={this.handleChange}></Input>
                    <Button className="mt10" type="primary" size="large" block onClick={this.getQrcode}>生成二维码</Button>
                </div>
                <div className="qr-code">
                    <img src={this.state.qr} alt=""/>
                </div>
            </div>
        );
    }

}

export default Qrcode;
