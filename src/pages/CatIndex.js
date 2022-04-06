import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
    render() {
        return (
            <>
              <div className="Index">
                <h2>Meet All of the Available Cats!</h2>
                <ul>
                    {this.props.cats && this.props.cats.map(cat => {
                  return <p key={cat.id}><NavLink to={`/catshow/${cat.id}`}>{cat.name}</NavLink></p>;
                    })}
                </ul>
                <h2> Add Your Cat to our Awesome Site!</h2>
                <p><NavLink to={`/catnew`}>Click Here to Add Your Cat</NavLink></p>
                <h2> Go Back to Homepage </h2>
                <p><NavLink to={`/`}>Home</NavLink></p>
              </div>
            </>
        )
    }
}
export default CatIndex
