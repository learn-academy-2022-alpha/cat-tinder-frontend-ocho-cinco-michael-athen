import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
// react-router import
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

class CatNew extends Component {
  constructor(props){
  super(props)
  this.state = {
    newCat: {
      name: "",
      age: "",
      enjoys: "",
      image: ""
    },
    submitted:false
  }
}

handleChange = (e) => {
  // destructuring form out of state
  let { newCat } = this.state
  newCat[e.target.name] = e.target.value
  // setting state to the updated form content
  this.setState({newCat: newCat})
}

handleSubmit = () => {
  this.props.createCat(this.state.newCat)
  this.setState({submitted:true})
}

    render() {
        return (
          <div className="CatNew">
          <Form>
            <h2>Create a New Cat!</h2>
            <FormGroup>
              <Label for="name">Cat's Name</Label>
              <Input
                name="name"
                placeholder="What's the cat's name?"
                text="text"
                onChange={this.handleChange}
                value={this.state.newCat.name}
              />
            </FormGroup>

            <FormGroup>
              <Label for="age">Cat's Age</Label>
              <Input
                name="age"
                placeholder="What's the cat's age?"
                text="text"
                onChange={this.handleChange}
                value={this.state.newCat.age}
              />
            </FormGroup>

            <FormGroup>
              <Label for="enjoys">What does the Cat Enjoy Doing?</Label>
              <Input
                name="enjoys"
                placeholder="What does the cat enjoy doing?"
                text="text"
                onChange={this.handleChange}
                value={this.state.newCat.enjoys}
              />
            </FormGroup>

            <FormGroup>
              <Label for="image">Picture of Cat</Label>
              <Input
                name="image"
                placeholder="What does your cat look like?"
                text="url"
                onChange={this.handleChange}
                value={this.state.newCat.image}
              />
            </FormGroup>
            <Button name="submit" onClick={this.handleSubmit}> Create New Profile! </Button>
            <p><NavLink to={`/`}><Button>Go Back to Homepage</Button></NavLink></p>
            {this.state.submitted && <Redirect to="/catindex" />}
          </Form>
        </div>
        )
    }
}
export default CatNew
