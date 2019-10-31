import React from 'react';
import { HashRouter, Route} from 'react-router-dom'
import Nav from './components/nav';
import Foot from './components/foot';
import { Layout } from 'antd';
import Compress_html from './pages/compress_html';
import Compress_css from './pages/compress_css';
import Compress_js from './pages/compress_js';
import Qrcode from './pages/qrcode';
import './App.scss';

const { Header, Footer, Sider, Content } = Layout;


function App() {
    return (
        <HashRouter >
            <Layout>
                <Header>WEB UTILS</Header>
                <Layout>
                    <Sider> <Nav></Nav></Sider>
                    <Content>
                        <Route exact path='/' component={Compress_html} />
                        <Route exact path='/compress/css' component={Compress_css} />
                        <Route exact path='/compress/js' component={Compress_js} />
                        <Route path="/qrcode" component={Qrcode}/>
                    </Content>
                </Layout>
                <Footer>
                    <Foot></Foot>
                </Footer>
            </Layout>
        </HashRouter>
    );
}
export default App;
