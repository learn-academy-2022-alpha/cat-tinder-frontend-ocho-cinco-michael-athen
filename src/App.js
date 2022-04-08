import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount(){
    this.readCat()
  }

//CRUD Methods
createCat = (newCat) => {
  fetch("http://localhost:3000/cats", {
    // converting an object to a string
    body: JSON.stringify(newCat),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "POST"
  })
  .then(response => response.json())
  .then(payload => this.readCat())
  .catch(errors => console.log("Cat create errors:", errors))
}

readCat = () => {
  fetch("http://localhost:3000/cats")
  .then(response => response.json())
  .then(payload => this.setState({cats: payload}))
  .catch(errors => console.log("Cat read errors:", errors))
}

updateCat = (cat, id) =>{
  fetch(`http://localhost:3000/cats/${id}`, {
    // converting an object to a string
    body: JSON.stringify(cat),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "PATCH"
  })
  .then(response => response.json())
  .then(payload => this.readCat())
  .catch(errors => console.log("Cat update errors:", errors))
}

deleteCat = (id) => {
  fetch(`http://localhost:3000/cats/${id}`, {
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "DELETE"
  })
  .then(response => response.json())
  .then(payload => this.readCat())
  .catch(errors => console.log("delete errors:", errors))
}

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/catindex"
              render={(props) => <CatIndex cats={this.state.cats} />}
            />

            <Route
              path="/catshow/:id"
              render={(props) => {
                let id = props.match.params.id
                let cat = this.state.cats.find(catObj => catObj.id === +id)
                return <CatShow cat={cat} deleteCat={this.deleteCat}/>
              }}
            />

            <Route path="/catnew"
              render={(props) => <CatNew createCat={this.createCat} />}
             />

            <Route path="/catedit/:id" render = {(props) => {
                let id = props.match.params.id
                let cat = this.state.cats.find(catObj => catObj.id === +id)
                return <CatEdit updateCat={this.updateCat} cat={cat} />
            }}/>
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
export default App;
