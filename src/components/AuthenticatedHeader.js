import * as React from "react"
import {Nav, Navbar} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"

function AuthenticatedHeader(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>inSession Startcode</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/muchdata">
            <Nav.Link>Much data</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/user">
            <Nav.Link>User data</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin">
            <Nav.Link>Admin data</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <Navbar.Text>Signed in as: {props.user.username}</Navbar.Text>
          <LinkContainer to="/">
            <Nav.Link onClick={() => props.logout()}>Log out</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AuthenticatedHeader
