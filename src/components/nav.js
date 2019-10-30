import React from 'react';
// import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

class Nav extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div style={{ width: 200 }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >

                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>压缩混淆</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">
                            <Link to="/"><b>HTML</b></Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/compress/js"><b>Javascript</b></Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/compress/css"><b>CSS</b></Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>二维码生成</span>
                        <Link to="/qrcode"><b>二维码生成</b></Link>
                    </Menu.Item>
                    {/* <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>

                            </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu> */}
                </Menu>
            </div>
        );
    }
}
export default Nav;

