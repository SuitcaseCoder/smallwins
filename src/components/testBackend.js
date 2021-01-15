import axios from 'axios'
import React, { Component } from 'react'

export default class testBackend extends Component{
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    handleButtonClick = () => {
        let list = this;
        axios.get('/smallwins')
        .then(function (response) {
          console.log(response.data);
          list.setState({posts: response.data})
        //   console.log(this.posts});
        })
       .catch(function (error) {
          console.log(error);
       });
    }
    
    render() {
        return (
            <div>
                <h2>TESTING BACKEND</h2>
                <button onClick={this.handleButtonClick}>get post</button>
                <ul>
                {this.state.posts.map(item => (
                    <li key={item}>
                    {item.title}
                    {item.body}
                    </li>
                ))}
    </ul>
    </div>    
        )
    }
}
