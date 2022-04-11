import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap'

class CatShow extends Component {

  handleDelete = () => {
      if(window.confirm("Are you sure you want to delete this profile?") === true) {
        this.props.deleteCat(this.props.cat.id)
        this.setState({ submitted: "true" })
      } else {
        this.setState({ submitted: "false" })
      }
    }


    render() {
        return (
            <>
              <div className="CatShow">
                <h2>Meet the Amazing {this.props.cat && this.props.cat.name}!</h2>
                <p>Age: {this.props.cat && this.props.cat.age}</p>
                <p>Enjoys: {this.props.cat && this.props.cat.enjoys}</p>
                <img src={this.props.cat && this.props.cat.image} />
                <div className="Buttons">
                <NavLink to={`/catedit/${this.props.cat && this.props.cat.id}`}> <Button> Edit this Cat's Profile! </Button></NavLink>
                <NavLink to ={"/catindex"}> <Button onClick={this.handleDelete}> Delete this Cat's Profile </Button> </NavLink>
                <NavLink to={`/`}><Button>Go Back to Homepage</Button></NavLink>
                </div>
              </div>

            </>
        )
    }
}
export default CatShow
