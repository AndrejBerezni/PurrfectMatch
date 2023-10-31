import { Container, Button } from 'react-bootstrap'
import { HeartFill, Wikipedia, InfoCircleFill } from 'react-bootstrap-icons'
import { ICat } from '../../../compiler/interfaces'

interface ICatCardButtonsProps {
  cat: ICat
}
export default function CatCardButtons({
  cat,
}: Readonly<ICatCardButtonsProps>) {
  return (
    <Container className="d-flex justify-content-end gap-3">
      {cat.vetstreet_url && (
        <Button className="align-self-end primary-btn">
          <a
            href={cat.vetstreet_url}
            target="_blank"
            style={{ color: 'var(--bg-color)' }}
          >
            <InfoCircleFill />
          </a>
        </Button>
      )}
      <Button className="align-self-end primary-btn">
        <a
          href={cat.wikipedia_url}
          target="_blank"
          style={{ color: 'var(--bg-color)' }}
        >
          <Wikipedia />
        </a>
      </Button>
      <Button className="align-self-end primary-btn">
        <HeartFill />
      </Button>
    </Container>
  )
}
