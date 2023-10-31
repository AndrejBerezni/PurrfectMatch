import './herosection.css'
import { Row, Col, Button } from 'react-bootstrap'
import { getAuthStatus } from '../../store/authentication/selectors'
import { showSignIn } from '../../store/authentication'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

export default function HeroSection() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuth = useSelector(getAuthStatus)

  const handleButtonClick = () => {
    isAuth ? navigate('/search') : dispatch(showSignIn())
  }
  return (
    <Row className="my-5 pt-5 pb-4 hero-section">
      <Col>
        <h1>Discover Your Purrfect Companion</h1>
        <h2>Explore the Feline World with us</h2>
        <p>
          Step into the world of cats and find your perfect feline companion.
          Begin your cat-matching adventure now!
        </p>
        <Button className="primary-btn mt-3" onClick={handleButtonClick}>
          Find My Cat
        </Button>
      </Col>
    </Row>
  )
}
