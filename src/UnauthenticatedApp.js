import * as React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function UnauthenticatedApp() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>HEY home</div>
        </Route>
        <Route path="/">
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default UnauthenticatedApp
