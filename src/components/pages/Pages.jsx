import React from "react"
import Header from "../common/header/Header"
import { HashRouter as Router, Switch, Route } from "react-router-dom" // Usa HashRouter
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import HouseDetail from '../houseDetail/HouseDetail'
import ScrollToTop from "../../scripts/ScrollToTop";


const Pages = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/house/:id' component={HouseDetail} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
