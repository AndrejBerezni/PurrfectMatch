import { Container, Button } from 'react-bootstrap'
import {
  Heart,
  HeartFill,
  Wikipedia,
  InfoCircleFill,
} from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import { ICat } from '../../../compiler/interfaces'
import {
  addCatToFavorites,
  removeCatFromFavorites,
} from '../../../firebase/firebase-config'
import { getUser } from '../../../store/authentication/selectors'

interface ICatCardButtonsProps {
  cat: ICat
  isFavorite: boolean
}
export default function CatCardButtons({
  cat,
  isFavorite,
}: Readonly<ICatCardButtonsProps>) {
  const user = useSelector(getUser)

  const handleAdd = async () => {
    if (user) {
      await addCatToFavorites(user, cat)
    }
  }
  const handleRemove = async () => {
    if (user) {
      await removeCatFromFavorites(user, cat)
    }
  }

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
      {isFavorite ? (
        <Button className="align-self-end primary-btn" onClick={handleRemove}>
          <HeartFill />
        </Button>
      ) : (
        <Button className="align-self-end primary-btn" onClick={handleAdd}>
          <Heart />
        </Button>
      )}
    </Container>
  )
}
