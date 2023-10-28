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
import NavItem from '../NavItem/NavItem'

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
            <NavItem
              icon={<HouseHeartFill />}
              linkTo="/"
              linkText="Home"
              isLink={true}
            />
            <NavItem
              icon={<SearchHeartFill />}
              linkTo="/search"
              linkText="Search"
              isLink={true}
            />
            <NavItem
              icon={<BookmarkHeartFill />}
              linkTo="/favorites"
              linkText="Favorites"
              isLink={true}
            />
            <NavItem icon={<MoonFill />} linkText="Dark Mode" isLink={false} />
            <NavItem
              icon={<BoxArrowRight />}
              linkText="Sign Out"
              isLink={false}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
