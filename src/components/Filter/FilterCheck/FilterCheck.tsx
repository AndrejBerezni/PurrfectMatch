import { Form } from 'react-bootstrap'
import { applyFilter, removeFilter } from '../../../store/search'
import { useDispatch, useSelector } from 'react-redux'
import { getFilters } from '../../../store/search/selectors'

interface IFilterCheckProps {
  label: string
}

export default function FilterCheck({ label }: Readonly<IFilterCheckProps>) {
  const dispatch = useDispatch()
  const filters: string[] = useSelector(getFilters)

  const handleChange = () => {
    filters.includes(label)
      ? dispatch(removeFilter(label))
      : dispatch(applyFilter(label))
  }

  return (
    <Form.Check
      className="mb-3 mb-md-2"
      inline
      label={label}
      type="checkbox"
      id={`checkbox-${label}`}
      onClick={handleChange}
      checked={filters.includes(label)}
    />
  )
}
