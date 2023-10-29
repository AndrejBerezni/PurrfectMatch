import CatCard from '../../components/CatCard/CatCard'
import useCatList from '../../hooks/useCatList'
import { Container, Row, Col } from 'react-bootstrap'

export default function PetSearch() {
  const cats = useCatList()
  return (
    <Container>
      <h1>PetSearch</h1>
      {cats.map((item) => (
        <Row className="mb-3">
          <Col xs={{ span: 10, offset: 1 }}>
            <CatCard cat={item} key={item.id} />
          </Col>
        </Row>
      ))}
    </Container>
  )
}
