import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap'

class CatShow extends Component {

  handleDelete = () => {
    this.props.deleteCat(this.props.cat.id)
  }


    render() {
        return (
            <>
              <div className="CatShow">
                <h2>Meet the Amazing {this.props.cat && this.props.cat.name}!</h2>
                <p>Age: {this.props.cat && this.props.cat.age}</p>
                <p>Enjoys: {this.props.cat && this.props.cat.enjoys}</p>
                <img src={this.props.cat && this.props.cat.image} />
                <NavLink to={`/catedit/${this.props.cat && this.props.cat.id}`}> <Button> Edit this Cat's Profile! </Button></NavLink>
                <NavLink to ={"/catindex"}> <Button onClick={this.handleDelete}> Delete this Cat's Profile </Button> </NavLink>
              </div>
            </>
        )
    }
}
export default CatShow
