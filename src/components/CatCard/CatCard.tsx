import { ICat } from '../../compiler/interfaces'
import { Container, Row, Col } from 'react-bootstrap'
import './catcard.css'
import CharacterSection from '../CharacterSection/CharacterSection'

interface ICatCardProps {
  cat: ICat
}

export default function CatCard({ cat }: Readonly<ICatCardProps>) {
  return (
    <Container className="p-3 cat-card-container">
      <Row>
        {cat.image && (
          <Col md={3} className="d-flex flex-column justify-content-center">
            <img
              src={cat.image.url}
              alt="{cat.name}"
              className="cat-card-image"
            />
          </Col>
        )}
        <Col md={4} className="align-items-start">
          <h3 className="cat-card-prop">{cat.name}</h3>
          <h5>
            <span className="cat-card-prop-name">Origin: </span>
            {cat.origin}
          </h5>
          <h5>
            <span className="cat-card-prop-name">Size: </span>
            {cat.weight.metric} kg
          </h5>
          <h5>
            <span className="cat-card-prop-name">Life Span: </span>
            {cat.life_span} years
          </h5>
          <h5 className="cat-card-prop">{cat.temperament}</h5>
        </Col>
        <Col md={4}>
          <CharacterSection cat={cat} />
        </Col>
      </Row>
    </Container>
  )
}
