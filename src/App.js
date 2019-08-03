import React, { Component } from 'react';
import PostForm from './PostForm.js'
import AllPost from './AllPost.js'

 class App extends Component{
    render() {
        return(
            <div className="App">
                <div className="navbar">
                    <h2 className="center">CRUD Using Store.dispatch</h2>
                </div>
                <PostForm />
                <AllPost />

            </div>
        )
    }
 }

export default App;
