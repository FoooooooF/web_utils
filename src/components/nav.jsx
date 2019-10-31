import React from 'react';
// import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { Menu} from 'antd';

import icon01 from "../assets/img/icon01.png"
import icon02 from "../assets/img/icon02.png"

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
                    // collapsed={this.state.collapsed}
                >

                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                {/* <Icon type="mail" /> */}
                                <img className="menu-Icon" src={icon01} alt="" />
                                <span>压缩混淆</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">
                            <Link to="/"><b>HTML</b></Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/compress/css"><b>CSS</b></Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/compress/js"><b>JAVSACSCRIPT</b></Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2">
                        <img className="menu-Icon" src={icon02} alt="" />
                        <span>二维码生成</span>
                        <Link to="/qrcode"><b>二维码生成</b></Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
export default Nav;

