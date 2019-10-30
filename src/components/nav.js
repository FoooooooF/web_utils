import React from 'react';
import ReactDOM from "react-dom";
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
            <div style={{ width: 256 }}>
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
                        <Menu.Item key="5">HTML</Menu.Item>
                        <Menu.Item key="6">Javascript</Menu.Item>
                        <Menu.Item key="7">CSS</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>二维码生成</span>
                    </Menu.Item>
                    <SubMenu
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
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
export default Nav;

