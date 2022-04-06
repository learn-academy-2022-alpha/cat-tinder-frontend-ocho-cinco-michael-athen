import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Welcome to Cat Tinder!</h1>
                <p><NavLink to={`/catindex`}>Check Out All of Our Cats!</NavLink></p>
                <p><NavLink to={`/catnew`}>Add Your Cat to Our Awesome Site!</NavLink></p>
                <img src="https://cdn.pixabay.com/photo/2019/07/18/08/58/cat-4345889_1280.jpg" />

            </div>
        )
    }
}
export default Home
