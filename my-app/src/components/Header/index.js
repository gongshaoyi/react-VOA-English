import React, { Fragment }from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios';
import logo from './logo.png';
import './style.css';
import Item from 'antd/lib/list/Item';


class AppHeader extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    
    getMenuItems() {
        return this.state.list.map(Item => {
            return (
                <Menu.Item key={Item.id} icon={<MailOutlined/>}>
                    <Link to={`/${Item.id}`}>
                        {Item.title}
                    </Link>
                </Menu.Item>
            )
        })

    }    
      
    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/header.json')
            .then((res)=>{
                // console.log(res.data.data);
                this.setState({
                    list: res.data.data
                })

            })
    }

    render() {
        return (
            <Fragment>
                <img src={logo} className='App-header-logo'></img>
                <Menu 
                    mode="horizontal"
                    className="app-header-menu"
                >
                        { this.getMenuItems() }
                </Menu>
            </Fragment>
            
        )
    }
}

export default AppHeader;