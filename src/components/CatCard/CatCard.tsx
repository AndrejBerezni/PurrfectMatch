import { Container, Row, Col } from 'react-bootstrap'
import './catcard.css'
import BasicInfoSection from './BasicInfoSection/BasicInfoSection'
import CharacterSection from './CharacterSection/CharacterSection'
import SpecialTraitsSection from './SpecialTraitsSection/SpecialTraitsSection'
import { ICat } from '../../compiler/interfaces'

interface ICatCardProps {
  cat: ICat
}

export default function CatCard({ cat }: Readonly<ICatCardProps>) {
  return (
    <Container className="p-3 cat-card-container">
      <Row>
        <Col md={8} className="d-flex flex-column justify-content-between">
          <Row className="my-1">
            {cat.image && (
              <Col md={6} className="d-flex flex-column justify-content-start">
                <img
                  src={cat.image.url}
                  alt="{cat.name}"
                  className="cat-card-image"
                />
              </Col>
            )}
            <Col md={6} className="align-items-start">
              <BasicInfoSection cat={cat} />
            </Col>
          </Row>
          <Row className="mt-4 p-2">
            <p className="cat-card-description">{cat.description}</p>
          </Row>
          <Row className="mb-3">
            <SpecialTraitsSection cat={cat} />
          </Row>
        </Col>
        <Col md={4}>
          <CharacterSection cat={cat} />
        </Col>
      </Row>
    </Container>
  )
}
