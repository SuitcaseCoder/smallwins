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
        axios.get('/')
        // .then(response => response.json())
        .then(function (response) {
            console.log('response came back');
            console.log(response);
        //   console.log(response.data);
          list.setState({posts: response.data})
        //   console.log(this.posts});
        })
       .catch(function (error) {
          console.log(error);
       });
    }

    handlePostReq = () => {
        const thing = { title: 'thing title' }; 
        axios.post('/addwin1', thing)
        .then(function (response) {
          console.log(response.data);
          this.setState({thing: "thing one"})
        })
       .catch(function (error) {
          console.log('an err occurred', error);
       });
    }

    
    render() {
        return (
            <div>
                <h2>TESTING BACKEND</h2>
                <button onClick={this.handleButtonClick}>get post</button>
                <button  onClick={this.handlePostReq}>post a post</button>
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
