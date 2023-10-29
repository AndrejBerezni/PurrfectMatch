import Alert from 'react-bootstrap/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { hideAlert } from '../../store/alert'
import { getAlertMessage } from '../../store/alert/selectors'

interface IAuthAlertProps {
  show: boolean
}

function AuthAlert({ show }: Readonly<IAuthAlertProps>) {
  const dispatch = useDispatch()
  const message = useSelector(getAlertMessage)

  const handleCloseAlert = () => {
    dispatch(hideAlert())
  }

  return (
    <Alert
      show={show}
      onClose={handleCloseAlert}
      variant="danger"
      dismissible={true}
    >
      {message}
    </Alert>
  )
}

export default AuthAlert
