import { useRef } from 'react'
import {
  Modal,
  CloseButton,
  Form,
  FloatingLabel,
  Button,
  Container,
  Image,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/paw.png'
import { signUpWithEmail } from '../../../firebase/firebase-config'
import { signIn, hideForms } from '../../../store/authentication'
import { getShowSignUp } from '../../../store/authentication/selectors'
import '../forms.css'

function SignUpForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const show = useSelector(getShowSignUp)
  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null)

  const handleClose = () => {
    dispatch(hideForms())
  }

  const handleEmailSignUp = async () => {
    if (passwordRef.current!.value !== confirmPasswordRef.current!.value) {
      console.log('Passwords do not match')
      return
    }
    if (usernameRef.current!.value.trim() === '') {
      console.log('Please enter username')
      return
    }
    try {
      const user = await signUpWithEmail(
        emailRef.current!.value.trim().toLowerCase(), //assert that is not null
        passwordRef.current!.value, //assert that is not null
        usernameRef.current!.value //assert that is not null
      )
      dispatch(signIn(user))
      dispatch(hideForms())
      navigate('/search')
    } catch (error: any) {
      console.error(error.message)
    }
  }
  return (
    <Modal
      show={show}
      onHide={handleClose}
      fullscreen="md-down"
      centered={true}
      keyboard={true}
    >
      <Modal.Header>
        <Modal.Title>
          <Image src={logo} className="logo-icon"></Image>Sign Up
        </Modal.Title>
      </Modal.Header>
      <CloseButton className="auth-close-btn" onClick={handleClose} />
      <Container className="d-flex flex-column align-items-center">
        <Form className="my-3 d-flex flex-column align-items-center auth-form">
          <FloatingLabel
            label="Create username"
            className="my-3 auth-form-label"
          >
            <Form.Control
              as="input"
              type="text"
              ref={usernameRef}
              placeholder="Username"
            />
          </FloatingLabel>
          <FloatingLabel
            label="Enter your Email"
            className="my-3 auth-form-label"
          >
            <Form.Control
              as="input"
              type="email"
              ref={emailRef}
              placeholder="Email"
            />
          </FloatingLabel>
          <FloatingLabel
            label="Create Password"
            className="my-3 auth-form-label"
          >
            <Form.Control
              as="input"
              type="password"
              ref={passwordRef}
              placeholder="Password"
            />
          </FloatingLabel>
          <FloatingLabel
            label="Confirm Password"
            className="my-3 auth-form-label"
          >
            <Form.Control
              as="input"
              type="password"
              ref={confirmPasswordRef}
              placeholder="Confirm Password"
            />
          </FloatingLabel>
          <Button className="auth-btn" onClick={handleEmailSignUp}>
            Sign Up
          </Button>
        </Form>
      </Container>
    </Modal>
  )
}

export default SignUpForm