import { Container } from 'react-bootstrap'
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
      <h5>{title}</h5>
      {list.map((item: string) => (
        <FilterCheck label={item} />
      ))}
    </Container>
  )
}
