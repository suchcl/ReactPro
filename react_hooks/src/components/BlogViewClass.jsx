import React, { Component } from 'react';

export default class BlogViewClass extends Component {
    state = {
        blogContent: "blog内容"
    };
    componentDidMount() {
        // 组件第一次加载时去获取blog数据
        const id = this.props.id;
        const res = fetch("/blog-content/${id}");
        this.setState(
            {
                blogContent: res
            }
        );
    }

    componentWillUnmount(prevProps) {
        const { id } = this.props;
        if (prevProps.id !== id) {
            const res = fetch(`/blog-content/${id}`);
            this.setState({
                blogContent: res
            });
        }
    }
    render() {
        return <div>
            {this.state.blogContent}
        </div>;
    }
}
