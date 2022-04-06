import React, { Component } from 'react';

class CatShow extends Component {
    render() {

        return (
            <>
              <div className="CatShow">
                <h2>Meet the Amazing {this.props.cat && this.props.cat.name}!</h2>
                <p>Age: {this.props.cat && this.props.cat.age}</p>
                <p>Enjoys: {this.props.cat && this.props.cat.enjoys}</p>
                <img src={this.props.cat && this.props.cat.image} />
              </div>
            </>
        )
    }
}
export default CatShow
