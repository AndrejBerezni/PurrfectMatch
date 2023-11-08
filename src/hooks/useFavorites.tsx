import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ICat } from '../compiler/interfaces'
import { getFavoriteCats } from '../firebase/firebase-config'
import { getUser } from '../store/authentication/selectors'

export default function useFavorites() {
  const [favorites, setFavorites] = useState<ICat[] | null>(null) // not using assertion ([] as ICat[]) because that way spinner won't be shown while loading cats (check Favorites page)
  const user = useSelector(getUser)

  useEffect(() => {
    const fetchFavoriteCats = async () => {
      if (user) {
        const catList = await getFavoriteCats(user)
        setFavorites(catList)
      }
    }
    fetchFavoriteCats()
  }, [user])

  return favorites
}
