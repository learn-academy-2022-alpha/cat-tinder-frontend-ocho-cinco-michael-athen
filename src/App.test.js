// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import App from './App'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When App renders", () => {
  let app
  beforeEach(() => {
    app = shallow(<App />)
  })
  it("displays Header and Footer", () => {
    //const renderedApp = shallow(<App />)
    const renderedHeader = app.find("Header")
    expect(renderedHeader.length).toEqual(1)
    const renderedFooter = app.find("Footer")
    expect(renderedFooter.length).toEqual(1)
  })
  it("provides a route for home component", () => {
    //const renderedApp = shallow(<App />)
    const renderedHomeRoute = app.find('[path="/"]')
    expect(renderedHomeRoute.length).toEqual(1)
  })
})
