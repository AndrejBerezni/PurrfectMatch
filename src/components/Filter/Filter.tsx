import { useMemo } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import FilterSection from './FilterSection/FilterSection'
import './filter.css'
import { catSpecialTraits } from '../../data/catSpecialTraits'
import useCatList from '../../hooks/useCatList'
import extractCharacteristics from '../../utilities/extractCatCharacteristics'
import { resetFilters } from '../../store/search'
import { useDispatch } from 'react-redux'

export default function Filter() {
  const dispatch = useDispatch()

  const specialTraits = Object.keys(catSpecialTraits).map(
    (key) => catSpecialTraits[key as keyof typeof catSpecialTraits]
  )
  const cats = useCatList()
  const catCharacteristics = useMemo(() => {
    return extractCharacteristics(cats)
  }, [cats])

  const handleFilterReset = () => {
    dispatch(resetFilters())
  }

  return (
    <Container className="mt-3 py-2 filter-container">
      <Row>
        <p className="filter-instructions">
          Search for a perfect companion by applying filters below that suit
          your needs
        </p>
      </Row>
      <Row>
        <FilterSection list={catCharacteristics} title="Character" />
      </Row>
      <Row>
        <FilterSection list={specialTraits} title="Special Traits" />
      </Row>
      <Button className="primary-btn" onClick={handleFilterReset}>
        Reset filters
      </Button>
    </Container>
  )
}
