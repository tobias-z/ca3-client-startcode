import * as React from "react"
import AuthenticatedApp from "./AuthenticatedApp"
import UnauthenticatedApp from "./UnauthenticatedApp"
import * as facade from "./facades/userFacade"
import {handleError} from "./apiUtils"

function App() {
  const [user, setUser] = React.useState(null)

  function login(userCredentials, setError) {
    facade
      .login(userCredentials)
      .then(user => setUser({username: user.username}))
      .catch(error => handleError(error, setError))
  }

  // Whenever the user changes the app is rerendered
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App
