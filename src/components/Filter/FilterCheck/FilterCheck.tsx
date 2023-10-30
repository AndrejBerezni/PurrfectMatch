import { Form } from 'react-bootstrap'
import { applyFilter } from '../../../store/search'
import { useDispatch } from 'react-redux'

interface IFilterCheckProps {
  label: string
}

export default function FilterCheck({ label }: Readonly<IFilterCheckProps>) {
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(applyFilter(label))
  }

  return (
    <Form.Check
      className="mb-3 mb-md-2"
      inline
      label={label}
      type="checkbox"
      id={`checkbox-${label}`}
      onChange={handleChange}
    />
  )
}
