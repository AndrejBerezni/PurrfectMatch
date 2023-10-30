import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CatCard from '../../components/CatCard/CatCard'
import ListPagination from '../../components/ListPagination/ListPagination'
import useCatList from '../../hooks/useCatList'

export default function PetSearch() {
  const cats = useCatList()

  //handle pagination
  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastCat = currentPage * itemsPerPage
  const indexOfFirstCat = indexOfLastCat - itemsPerPage
  const currentCats = cats.slice(indexOfFirstCat, indexOfLastCat)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const totalPages = Math.ceil(cats.length / itemsPerPage)

  return (
    <Container>
      {currentCats.map((item) => (
        <Row className="my-3" key={item.id}>
          <Col xs={{ span: 10, offset: 1 }}>
            <CatCard cat={item} />
          </Col>
        </Row>
      ))}
      <Row>
        <Col className="d-flex justify-content-center">
          {/* adding condition below in order not to render pagination before items are ready */}
          {cats.length > 0 && (
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
