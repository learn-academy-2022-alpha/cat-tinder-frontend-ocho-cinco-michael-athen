import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="Not_Found">
                <h1>Not Found</h1>
                <h2>You're not supposed to be here!</h2>
                <a href="/">Return to the Home Page!</a>
            </div>
        )
    }
}
export default NotFound
