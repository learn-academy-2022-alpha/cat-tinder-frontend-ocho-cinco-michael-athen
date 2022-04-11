import React, { Component } from 'react';
import logo1 from "../assets/logo1.png";
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="Header">
            <h1>Cat Tinder</h1>
            <div className="FlamePaw">
            <img src={logo1} alt="page logo" height="60px" />
            </div>
            </div>
        )
    }
}
export default Header
