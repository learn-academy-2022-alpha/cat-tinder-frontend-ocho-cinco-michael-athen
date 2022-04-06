import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
    render() {
        return (
            <>
                <h2>CatIndex</h2>
                <ul>
                    {this.props.cats && this.props.cats.map(cat => {
                        return <li>
                            <NavLink to={`/catshow/${cat.id}`} key={cat.id}>{cat.name}</NavLink></li>;
                    })}
                </ul>
            </>
        )
    }
}
export default CatIndex