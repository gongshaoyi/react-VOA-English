import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageList from './containers/List/';
import Detail from './containers/Detail/'
import AppHeadr from './components/Header/';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './style.css'

const { Header, Footer, Content } = Layout;

class App extends React.Component {
    render() {
                    
        return (
        <BrowserRouter>
            <Layout style={{minWidth: 1300, height: '100%'}}>
                <Header className="header">
                    <AppHeadr />
                </Header>
                <Content className='content'>
                        <Switch>
                            <Route path='/detail' component={Detail} />
                            <Route path='/:id?' component={PageList}/>
                        </Switch>      
                </Content>
                <Footer className="footer">@copyright gongshaoyi 2020</Footer>
            </Layout>
        </BrowserRouter>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))

