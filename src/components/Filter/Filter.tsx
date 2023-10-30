import { Button, Container, Row } from 'react-bootstrap'
import FilterSection from './FilterSection/FilterSection'
import './filter.css'
import { catSpecialTraits } from '../../data/catSpecialTraits'
import useCatList from '../../hooks/useCatList'
import extractCharacteristics from '../../utilities/extractCatCharacteristics'

export default function Filter() {
  const specialTraits = Object.keys(catSpecialTraits).map(
    (key) => catSpecialTraits[key as keyof typeof catSpecialTraits]
  )
  //extract all characteristics from cats to create list of filters
  const cats = useCatList()
  const catCharacteristics = extractCharacteristics(cats)

  return (
    <Container className="mt-3">
      <Row>
        <p>
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
      <Button>Reset filters</Button>
    </Container>
  )
}
