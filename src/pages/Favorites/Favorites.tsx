import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { ICat } from '../../compiler/interfaces'
import CatCard from '../../components/CatCard/CatCard'
import ListPagination from '../../components/ListPagination/ListPagination'
import useFavorites from '../../hooks/useFavorites'
import { usePagination } from '../../hooks/usePagination'

export default function Favorites() {
  const favorites = useFavorites()
  const { currentPage, currentItems, totalPages, paginate } = usePagination(
    favorites!,
    5
  )

  return (
    <Container>
      <h2 className="mt-3">Favorites</h2>
      {currentItems?.map((item) => (
        <Row className="my-3" key={item.id}>
          <Col xs={{ span: 12 }}>
            <CatCard
              cat={item}
              isFavorite={favorites!.some(
                (fav: ICat) => fav.name === item.name
              )}
            />
          </Col>
        </Row>
      ))}
      <Row>
        <Col className="d-flex justify-content-center">
          {!favorites ? (
            <Spinner animation="border" className="spinner" />
          ) : favorites.length === 0 ? (
            <h3>No cats added to favorites yet</h3>
          ) : (
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          )}
        </Col>
      </Row>
    </Container>
  )
}
