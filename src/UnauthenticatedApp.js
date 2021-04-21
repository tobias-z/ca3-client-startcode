import * as React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./routes/HomePage"
import LoginPage from "./routes/LoginPage"

function UnauthenticatedApp() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default UnauthenticatedApp
