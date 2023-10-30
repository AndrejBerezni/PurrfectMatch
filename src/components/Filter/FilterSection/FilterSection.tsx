import { Container, Row, Col } from 'react-bootstrap'
import FilterCheck from '../FilterCheck/FilterCheck'

interface IFilterSectionProps {
  list: string[]
  title: string
}

export default function FilterSection({
  list,
  title,
}: Readonly<IFilterSectionProps>) {
  return (
    <Container className="filter-section my-1">
      <Row>
        <h5 className="filter-section-title mb-3">{title}</h5>
      </Row>
      <Row className="justify-content-between justify-content-md-start">
        {list.map((item: string) => (
          <Col
            xs={5}
            sm={4}
            md={3}
            lg={2}
            className="d-flex align-items-start"
            key={`label-${item}`}
          >
            <FilterCheck label={item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
