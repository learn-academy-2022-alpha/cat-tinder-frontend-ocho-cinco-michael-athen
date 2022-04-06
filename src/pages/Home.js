import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Welcome to Cat Tinder!</h1>
                <img src="https://cdn.pixabay.com/photo/2019/07/18/08/58/cat-4345889_1280.jpg" />
                <a href="/catindex">Check Out All Our HOT Single Cats!</a>
                <a href="/catnew">Add Your Cat to Our Awsome Site (Fuctionality Pending)!</a>

            </div>
        )
    }
}
export default Home
