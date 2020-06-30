import React from 'react';
import axios from 'axios';
import { List, Typography, Divider } from 'antd';


class PageList extends React.Component {

componentWillReceiveProps(nextProps) {
    // console.log(nextProps.match.params.id);
    const id = nextProps.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
            .then(res => {
                // console.log(res.data.data);
                this.setState({
                    data: res.data.data
                });
            })
}

constructor(props) {
    super(props);
    this.state = {
        data: []
    }
}

    render() {
        // console.log(this.props.match.params.id);
       return (
        <List
            style={{background: "#fff"}}
            bordered
            dataSource={this.state.data}
            renderItem={item => (
            <List.Item>
                {item.title}
            </List.Item>
            )}
      />
       )
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
            .then(res => {
                // console.log(res.data.data);
                this.setState({
                    data: res.data.data
                });
            })
    }
}

export default PageList;