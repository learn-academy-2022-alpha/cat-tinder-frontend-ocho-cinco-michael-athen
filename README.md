Cat Tinder Setup
    As a developer, I can create a directory in src called pages.
    As a developer, I can create a directory in src called components.
    As a developer, I can create a directory in src called assets.
        directories created!

    As a developer, I can create a file called Header.js in the components directory.
        import Header from "./components/Header";
        <Header />

    As a developer, I can create a file called Footer.js in the components directory.
         import Footer from "./components/Footer";
        <Footer />

    As a developer, I can create a file called Home.js in the pages directory.
    As a developer, I can create a file called CatIndex.js in the pages directory.
    As a developer, I can create a file called CatShow.js in the pages directory.
    As a developer, I can create a file called CatNew.js in the pages directory.
    As a developer, I can create a file called CatEdit.js in the pages directory.
    As a developer, I can create a file called NotFound.js in the pages directory.
        import CatEdit from "./pages/CatEdit";
        import CatIndex from "./pages/CatIndex";
        import CatNew from "./pages/CatNew";
        import CatShow from "./pages/CatShow";
        import Home from "./pages/Home";
        import NotFound from "./pages/NotFound";

    As a developer, I can add a file to src called mockCats.js and add an array of cat objects.
        file created

    As a developer, I can add Reactstrap to my application.
        $ yarn add reactstrap

    As a developer, I can use Reactstrap to create the header UI.
    As a developer, I can use Reactstrap to create the footer UI.
        import 'bootstrap/dist/css/bootstrap.min.css';

    As a developer, I can import the header and footer to all the page components.
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catindex" component={CatIndex} />
            <Route path="/catshow" component={CatShow} />
            <Route path="/catnew" component={CatNew} />
            <Route path="/catedit" component={CatEdit} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>

    As a developer, I can add some styling to the Home component.
            Home.js
                import React, { Component } from 'react';
                import "./Home.css";

                class Home extends Component {
                    render() {
                        return (
                            <div className="Home">
                                <h1>Home</h1>
                            </div>
                        )
                    }
                }
                export default Home

            Home.css
                .Home {
                display: flex;
                background-color: yellow;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: calc(75vh - 65px);
                padding-top: 75px;
                }    

    As a developer, I can add react-router-dom@5.3.0 to my application.
        $  yarn add react-router-dom@5.3.0
            import {
            BrowserRouter as Router,
            Route,
            Switch
            } from 'react-router-dom'

    As a developer, I can add routes to be able to navigate manually to all pages.
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catindex" component={CatIndex} />
            <Route path="/catshow" component={CatShow} />
            <Route path="/catnew" component={CatNew} />
            <Route path="/catedit" component={CatEdit} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>

Challenge: Cat Tinder Tests
        Add Enzyme to your application
        yarn add -D enzyme react-test-renderer enzyme-adapter-react-16

        Add a test file for the Home, Header, Footer, and NotFound components with the .test.js extension.

        Create a test for each page, checking that the page is rendering by asserting against a single JSX element.

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

        describe("When Home renders", () => {
          it("displays Home as the Header", () => {
            const renderedHome = shallow(<Home />)
            const homeHeading = renderedHome.find("h1")
            expect(renderedHome.text()).toEqual('Home')
          })
        })

        describe("When NotFound renders", () => {
          it("displays NotFound", () => {
            const renderedNotFound = shallow(<NotFound />)
            const notFoundHeading = renderedNotFound.find("h1")
            expect(notFoundHeading.text()).toEqual('Not Found')
          })
        })

Stretch Challenges
As a developer, I can make my tests more DRY by declaring reusable variables in global scope.

let app
beforeEach(() => {
  app = shallow(<App />)
})

Create an additional test for the component Home.js that checks for the first img tag and all of its props.

Create an additional test for the component Header.js that checks for a tag by its class name to contain some text.
