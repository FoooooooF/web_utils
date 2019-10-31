import React, { Component } from 'react';
import {Button,Input,Radio, Row,Col} from 'antd';

const {TextArea }=Input;

class Compress_html extends Component {
    render() {
        return (
            <Row className="html">
                <Col className="html-select" span={4}>
                    <ul>
                    {
                        ['压缩JS','压缩CSS','去掉双引号','去掉换行','去掉空白符'].map((v,i)=>{
                            return (
                                <li key={i}>
                                    <Radio>{v}</Radio>
                                </li>
                            )
                        })
                    }
                    </ul>
                </Col>
                <Col className="html-content" span={20}>
                    <h2>请输入要压缩的代码</h2>
                    <TextArea rows={10} placeholder="请输入要压缩的代码" />
                    <Button className="mt10" type="primary" block>压缩</Button>
                    <h2>压缩后的代码</h2>
                    <TextArea rows={6} placeholder="压缩后的代码" />
                </Col>
            </Row>
        );
    }

}

export default Compress_html;
