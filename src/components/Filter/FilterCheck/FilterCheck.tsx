import { Form } from 'react-bootstrap'

interface IFilterCheckProps {
  label: string
}

export default function FilterCheck({ label }: Readonly<IFilterCheckProps>) {
  return (
    <Form.Check inline label={label} type="checkbox" id={`checkbox-${label}`} />
  )
}
