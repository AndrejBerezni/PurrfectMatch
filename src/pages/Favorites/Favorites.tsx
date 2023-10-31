import { Container, Row, Col } from 'react-bootstrap'
import CatCard from '../../components/CatCard/CatCard'
import useFavorites from '../../hooks/useFavorites'

export default function Favorites() {
  const favorites = useFavorites()

  return (
    <Container>
      <h3 className="mt-3">Favorites</h3>
      {favorites.map((item) => (
        <Row className="my-3" key={item.id}>
          <Col xs={{ span: 12 }}>
            <CatCard
              cat={item}
              isFavorite={favorites.some((fav) => fav.name === item.name)}
            />
          </Col>
        </Row>
      ))}
    </Container>
  )
}
