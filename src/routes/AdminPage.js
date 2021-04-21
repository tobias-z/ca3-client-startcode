import * as React from "react"
import {fetchData, handleError} from "../apiUtils"
import CenteredContainer from "../components/CenteredContainer"
import {INFO} from "../settings"

function AdminPage() {
  const [adminData, setAdminData] = React.useState()
  const [error, setError] = React.useState()

  React.useEffect(() => {
    fetchData(INFO.ADMIN)
      .then(data => setAdminData(data))
      .catch(error => handleError(error, setError))
  }, [])

  return (
    <CenteredContainer>
      <h1>Hello admin 😈</h1>
      {error && <h4>{error.message}</h4>}
      {adminData && <h4>{adminData.msg}</h4>}
    </CenteredContainer>
  )
}

export default AdminPage
