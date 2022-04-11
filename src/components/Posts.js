import React, { Component } from 'react'

//Bootstrap Style
import './bootstrap/reactjs/css/bootstrap.css';
import './bootstrap/reactjs/css/bootstrap-utilities.css';
import './bootstrap/reactjs/css/bootstrap-grid.css';
import './bootstrap/reactjs/css/bootstrap-reboot.css';
import './bootstrap/reactjs/css/bootstrap-icons.css';
import './bootstrap/reactjs/css/bootstrap-glyphicons.css';

export default class Posts extends Component {
    state={
        posts: []
    }
    async componentDidMount (){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        this.setState({posts: data});
        console.log(data);
    }
    render() {
        return (
            <div className='mt-4 p-5 bg-primary text-white rounded'>
                {
                    this.state.posts.map(post => {
                        return (<div key={post.id}>
                            <div className='h6'>{post.title}</div>
                            <p>{post.body}</p>
                        </div>);
                    })
                }
            </div>
        )
    }
}
