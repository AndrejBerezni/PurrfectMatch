import { Button, Container, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FilterSection from './FilterSection/FilterSection'
import './filter.css'
import { catSpecialTraits } from '../../data/catSpecialTraits'
import { resetFilters, resetCharacteristics } from '../../store/search'
import {
  getAvailableCharacteristics,
  getFilteredList,
} from '../../store/search/selectors'

export default function Filter() {
  const dispatch = useDispatch()
  const catList = useSelector(getFilteredList)

  const specialTraits = Object.keys(catSpecialTraits).map(
    (key) => catSpecialTraits[key as keyof typeof catSpecialTraits]
  )

  const catCharacteristics = useSelector(getAvailableCharacteristics)

  const handleFilterReset = () => {
    dispatch(resetFilters())
    dispatch(resetCharacteristics())
  }

  return (
    <Container className="mt-3 py-2 filter-container">
      <Row>
        <p className="filter-instructions">
          Search for a perfect companion by applying filters below that suit
          your needs
        </p>
      </Row>
      {catCharacteristics.length === 0 && catList.length !== 0 ? (
        <Spinner className="spinner" />
      ) : (
        <>
          <Row>
            <FilterSection list={catCharacteristics} title="Character" />
          </Row>
          <Row>
            <FilterSection list={specialTraits} title="Special Traits" />
          </Row>
          <Button className="primary-btn" onClick={handleFilterReset}>
            Reset filters
          </Button>
        </>
      )}
    </Container>
  )
}
