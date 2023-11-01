import { useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CatCard from '../../components/CatCard/CatCard'
import Filter from '../../components/Filter/Filter'
import ListPagination from '../../components/ListPagination/ListPagination'
import useCatList from '../../hooks/useCatList'
import useFavorites from '../../hooks/useFavorites'
import { usePagination } from '../../hooks/usePagination'
import { getFilteredList, getFilters } from '../../store/search/selectors'

export default function PetSearch() {
  useCatList()
  const cats = useSelector(getFilteredList)
  const filters = useSelector(getFilters)
  const favorites = useFavorites()
  const { currentPage, setCurrentPage, currentItems, totalPages, paginate } =
    usePagination(cats, 5)

  useEffect(() => {
    setCurrentPage(1)
  }, [filters])

  return (
    <Container>
      <Row>
        <Col xs={12} lg={{ span: 12 }}>
          {(cats.length > 0 || filters.length > 0) && <Filter />}
        </Col>
      </Row>
      {currentItems.map((item) => (
        <Row className="my-3" key={item.id}>
          <Col xs={{ span: 12 }}>
            <CatCard
              cat={item}
              isFavorite={favorites.some((fav) => fav.name === item.name)}
            />
          </Col>
        </Row>
      ))}
      <Row>
        <Col className="d-flex justify-content-center">
          {cats.length === 0 && filters.length === 0 ? (
            <Spinner animation="border" className="spinner" />
          ) : cats.length !== 0 ? (
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          ) : (
            <h3 className="mt-5">
              Sorry, no cats match your criteria. Try filtering again or
              consider removing some filters to find a match.
            </h3>
          )}
        </Col>
      </Row>
    </Container>
  )
}
