import * as React from "react"
import {Container} from "react-bootstrap"

function CenteredContainer(props) {
  const {children} = props
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{minHeight: "90vh", flexDirection: "column"}}>
      {children}
    </Container>
  )
}

export default CenteredContainer
