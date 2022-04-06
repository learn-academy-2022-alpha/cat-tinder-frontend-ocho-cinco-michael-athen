// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatNew from './CatNew'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew renders", () => {
  let newCat
  beforeEach(() => {
    newCat = shallow(<CatNew />)
  })
    it("displays a heading", () => {
        const catNewHeader = newCat.find("h2")
        expect(catNewHeader.text()).toEqual("Create a New Cat!")
    })
    it("displays a form", () => {
        const newForm = newCat.find("Form")
        expect(newForm.length).toEqual(1)
    })
    it("displays a cat name input", () => {
        const catNewNameInput = newCat.find("[name='name']")
        expect(catNewNameInput.length).toEqual(1)
    })
    it("displays a cat age input", () => {
        const catNewAgeInput = newCat.find("[name='age']")
        expect(catNewAgeInput.length).toEqual(1)
    })
    it("displays a cat enjoys input", () => {
        const catNewEnjoysInput = newCat.find("[name='enjoys']")
        expect(catNewEnjoysInput.length).toEqual(1)
    })
    it("displays a cat image input", () => {
        const catNewImageInput = newCat.find("[name='image']")
        expect(catNewImageInput.length).toEqual(1)
    })
})
