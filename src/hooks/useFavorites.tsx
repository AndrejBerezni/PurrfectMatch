import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ICat } from '../compiler/interfaces'
import { getFavoriteCats } from '../firebase/firebase-config'
import { getUser } from '../store/authentication/selectors'

export default function useFavorites() {
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

  return favorites
}
