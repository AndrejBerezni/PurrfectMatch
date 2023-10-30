import { Form } from 'react-bootstrap'

interface IFilterCheckProps {
  label: string
}

export default function FilterCheck({ label }: Readonly<IFilterCheckProps>) {
  return (
    <Form.Check
      className="mb-3 mb-md-2"
      inline
      label={label}
      type="checkbox"
      id={`checkbox-${label}`}
    />
  )
}
