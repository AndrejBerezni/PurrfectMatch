import { useState, useEffect } from 'react'
import { getFavoriteCats } from '../../firebase/firebase-config'
import { ICat } from '../../compiler/interfaces'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/authentication/selectors'
import { Container, Row, Col } from 'react-bootstrap'
import CatCard from '../../components/CatCard/CatCard'

export default function Favorites() {
  const [favorites, setFavorites] = useState<ICat[]>([])
  const user = useSelector(getUser)

  useEffect(() => {
    const fetchFavoriteCats = async () => {
      if (user) {
        const catList = await getFavoriteCats(user)
        setFavorites(catList)
      }
    }
    fetchFavoriteCats()
  })
  return (
    <Container>
      <h3 className="mt-3">Favorites</h3>
      {favorites.map((item) => (
        <Row className="my-3" key={item.id}>
          <Col xs={{ span: 12 }}>
            <CatCard cat={item} />
          </Col>
        </Row>
      ))}
    </Container>
  )
}
