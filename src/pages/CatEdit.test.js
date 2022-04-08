// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatEdit from './CatEdit'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When CatEdit renders", () => {
  let newCat
  beforeEach(() => {
    newCat = shallow(<CatEdit />)
  })
    it("displays a heading", () => {
        const catEditHeader = newCat.find("h2")
        expect(catEditHeader.text()).toEqual("Update a Cat!")
    })
    it("displays a form", () => {
        const editForm = newCat.find("Form")
        expect(editForm.length).toEqual(1)
    })
    it("displays a cat name input", () => {
        const catEditNameInput = newCat.find("[name='name']")
        expect(catEditNameInput.length).toEqual(1)
    })
    it("displays a cat age input", () => {
        const catEditAgeInput = newCat.find("[name='age']")
        expect(catEditAgeInput.length).toEqual(1)
    })
    it("displays a cat enjoys input", () => {
        const catEditEnjoysInput = newCat.find("[name='enjoys']")
        expect(catEditEnjoysInput.length).toEqual(1)
    })
    it("displays a cat image input", () => {
        const catEditImageInput = newCat.find("[name='image']")
        expect(catEditImageInput.length).toEqual(1)
    })
})
