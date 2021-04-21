import * as React from "react"
import {fetchData, handleError} from "../apiUtils"
import CenteredContainer from "../components/CenteredContainer"
import {INFO} from "../settings"

function UserPage() {
  const [userData, setUserData] = React.useState()
  const [error, setError] = React.useState()

  React.useEffect(() => {
    fetchData(INFO.USER)
      .then(data => setUserData(data))
      .catch(error => handleError(error, setError))
  }, [])

  return (
    <CenteredContainer>
      <h1>Hello user 🚀🙊</h1>
      {error && <h4>{error.message}</h4>}
      {userData && <h4>{userData.msg}</h4>}
    </CenteredContainer>
  )
}

export default UserPage
