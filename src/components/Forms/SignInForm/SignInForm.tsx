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
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import google from '../../../assets/google.png'
import logo from '../../../assets/paw.png'
import {
  signInWithGoogle,
  signInWithEmail,
} from '../../../firebase/firebase-config'
import formatFirebaseError from '../../../firebase/formatFirebaseError'
import { showAlert, hideAlert } from '../../../store/alert'
import { getAlertShow, getAlertType } from '../../../store/alert/selectors'
import { signIn, hideForms, showSignUp } from '../../../store/authentication'
import { getShowSignIn } from '../../../store/authentication/selectors'
import '../forms.css'
import AuthAlert from '../../AuthAlert/AuthAlert'

export default function SignInForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const show = useSelector(getShowSignIn)
  const showAuthAlert = useSelector(getAlertShow)
  const alertType = useSelector(getAlertType)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleClose = () => {
    dispatch(hideAlert())
    dispatch(hideForms())
  }

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle()
      if (user) {
        dispatch(signIn(user))
        dispatch(hideForms())
        navigate('/search')
      }
    } catch (error) {
      dispatch(showAlert({ type: 'sign in', message: 'Google Sign In failed' }))
    }
  }

  const handleEmailSignIn = async () => {
    try {
      const user = await signInWithEmail(
        emailRef.current!.value.trim().toLowerCase(), //assert that is not null
        passwordRef.current!.value //assert that is not null
      )
      dispatch(signIn(user))
      dispatch(hideForms())
      navigate('/search')
    } catch (error: any) {
      const formattedError = formatFirebaseError(error.message)
      dispatch(showAlert({ type: 'sign in', message: formattedError }))
    }
  }

  const redirectToSignUp = () => {
    dispatch(hideForms())
    dispatch(showSignUp())
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
          <Image src={logo} className="logo-icon"></Image>Sign In
        </Modal.Title>
      </Modal.Header>
      <CloseButton className="auth-close-btn" onClick={handleClose} />
      <Container className="d-flex flex-column align-items-center">
        <Form className="my-3 d-flex flex-column align-items-center auth-form">
          <FloatingLabel label="Email" className="my-3 auth-form-label">
            <Form.Control
              as="input"
              type="email"
              ref={emailRef}
              placeholder="Email"
            />
          </FloatingLabel>
          <FloatingLabel label="Password" className="my-3 auth-form-label">
            <Form.Control
              as="input"
              type="password"
              ref={passwordRef}
              placeholder="Password"
            />
          </FloatingLabel>
          <Button className="auth-btn" onClick={handleEmailSignIn}>
            Sign in
          </Button>
        </Form>
        <p className="my-1">
          Don't have an account?
          <a href="#" onClick={redirectToSignUp} className="auth-link">
            Sign Up
          </a>
        </p>
        <p className="my-1">or</p>
        <Button
          className="google-auth-btn mb-4 mt-1"
          onClick={handleGoogleSignIn}
        >
          <Image src={google} id="google-icon"></Image>Sign in with Google
        </Button>
        {alertType === 'sign in' && <AuthAlert show={showAuthAlert} />}
      </Container>
    </Modal>
  )
}
