import { Col } from 'react-bootstrap'
import useRandomFact from '../../hooks/useRandomFact'
import './randomfactsection.css'

export default function RandomFactSection() {
  const randomFact: string = useRandomFact()
  return (
    <Col
      md={5}
      className="random-fact-section d-flex flex-column justify-content-center gap-3 p-3 mt-5 mt-md-2 mb-3 mb-md-0"
    >
      <h3>Did you know...</h3>
      <p>{randomFact}</p>
    </Col>
  )
}
