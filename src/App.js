import React from 'react';
// import Button from 'antd/es/button';
// import { Button } from 'antd';
// import logo from './logo.svg';
import Nav from './components/nav.js';
import Foot from './components/foot.js';
import { Layout } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;


function App() {
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider> <Nav></Nav></Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>
                <Foot></Foot>
            </Footer>
        </Layout>
    );
}
export default App;
