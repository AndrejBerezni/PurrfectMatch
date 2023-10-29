import { Container, Row, Col } from 'react-bootstrap'
import CatCard from '../../components/CatCard/CatCard'
import useCatList from '../../hooks/useCatList'

export default function PetSearch() {
  const cats = useCatList()
  return (
    <Container>
      {cats.map((item) => (
        <Row className="my-3">
          <Col xs={{ span: 10, offset: 1 }}>
            <CatCard cat={item} key={item.id} />
          </Col>
        </Row>
      ))}
    </Container>
  )
}
