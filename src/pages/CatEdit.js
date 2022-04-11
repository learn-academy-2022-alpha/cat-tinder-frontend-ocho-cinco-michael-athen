import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
// react-router import
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class CatEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      newCat: {
        name:"",
        age:"",
        enjoys:"",
        image:""
      },
      submitted:false
    }
  }

  handleChange = (e) => {
    let {newCat} = this.state
    newCat[e.target.name] = e.target.value
    this.setState({newCat: newCat})
  }

  handleSubmit = () => {
    this.props.updateCat(this.state.newCat, this.props.cat.id)
    this.setState({submitted:true})
  }
    render() {
        return (
            <div className="CatEdit">
            <Form>
              <h2>Update a Cat!</h2>
              <FormGroup>
                <Label for="name">Cat's Name</Label>
                <Input
                  name="name"
                  text="text"
                  onChange={this.handleChange}
                  value={this.state.newCat.name}
                />
              </FormGroup>

              <FormGroup>
                <Label for="age">Cat's Age</Label>
                <Input
                  name="age"
                  text="text"
                  onChange={this.handleChange}
                  value={this.state.newCat.age}
                />
              </FormGroup>

              <FormGroup>
                <Label for="enjoys">What does the Cat Enjoy Doing?</Label>
                <Input
                  name="enjoys"
                  text="text"
                  onChange={this.handleChange}
                  value={this.state.newCat.enjoys}
                />
              </FormGroup>

              <FormGroup>
                <Label for="image">Picture of Cat</Label>
                <Input
                  name="image"
                  text="url"
                  onChange={this.handleChange}
                  value={this.state.newCat.image}
                />
              </FormGroup>
              <Button name="submit" onClick={this.handleSubmit}> Update Cat! </Button>
              <p><NavLink to={`/`}><Button>Go Back to Homepage</Button></NavLink></p>
              {this.state.submitted && <Redirect to= {`/catshow/${this.props.cat.id}`} />}
            </Form>
            </div>
        )
    }
}
export default CatEdit
