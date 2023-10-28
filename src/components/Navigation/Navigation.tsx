import { Container, Nav, Navbar } from 'react-bootstrap'
import {
  BoxArrowRight,
  MoonFill,
  SunFill,
  SearchHeartFill,
  BookmarkHeartFill,
  HouseHeartFill,
  PersonFill,
} from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import './navigation.css'
import { signOutUser } from '../../firebase/firebase-config'
import { showSignIn, signOut } from '../../store/authentication'
import { getAuthStatus } from '../../store/authentication/selectors'
import { switchDarkMode } from '../../store/darkMode'
import { getDarkMode } from '../../store/darkMode/selectors'
import NavItem from '../NavItem/NavItem'

export default function Navigation() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isDarkMode = useSelector(getDarkMode)
  const isAuth = useSelector(getAuthStatus)

  const handleDarkMode = () => {
    dispatch(switchDarkMode())
  }

  const handleSignOut = () => {
    signOutUser()
    dispatch(signOut())
    navigate('/')
  }
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary" id="navbar">
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
            {!isAuth && (
              <NavItem
                icon={<PersonFill />}
                linkText="Sign In"
                isLink={false}
                handleClick={() => {
                  dispatch(showSignIn())
                }}
              />
            )}
            {isAuth && (
              <>
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
              </>
            )}
            <NavItem
              icon={isDarkMode ? <SunFill /> : <MoonFill />}
              linkText="Dark Mode"
              isLink={false}
              handleClick={handleDarkMode}
            />
            {isAuth && (
              <NavItem
                icon={<BoxArrowRight />}
                linkText="Sign Out"
                isLink={false}
                handleClick={handleSignOut}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
