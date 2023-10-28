import { Container, Nav, Navbar } from 'react-bootstrap'
import {
  BoxArrowRight,
  MoonFill,
  SearchHeartFill,
  BookmarkHeartFill,
  HouseHeartFill,
} from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'
import './navigation.css'

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
      <Container
        id="navbar-container"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand as={NavLink} to="/">
          Purrfect Match
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            <Nav.Item as={NavLink} to="/" className="mx-3 my-1">
              <p className="nav-item-text">Home</p>
              <HouseHeartFill />
            </Nav.Item>
            <Nav.Item as={NavLink} to="/search" className="mx-3 my-1">
              <p className="nav-item-text">Search</p>
              <SearchHeartFill />
            </Nav.Item>
            <Nav.Item as={NavLink} to="/favorites" className="mx-3 my-1">
              <p className="nav-item-text">Favorites</p>
              <BookmarkHeartFill />
            </Nav.Item>
            <Nav.Item className="mx-3 my-1">
              <p className="nav-item-text">Dark Mode</p>
              <MoonFill />
            </Nav.Item>
            <Nav.Item className="mx-3 my-1">
              <p className="nav-item-text">Sign Out</p>
              <BoxArrowRight />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
