import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import ClassList from "./components/ClassList/ClassList"
import Student from "./components/Student/Student"
import Contact from "./components/Contact/Contact"

export default (
  <Switch>
    <Route path="/student/:id" component={Student} />
    <Route path="/classlist/:class" component={ClassList} />
    <Route path="/about/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route exact path="/" component={Home} />
  </Switch>
)
