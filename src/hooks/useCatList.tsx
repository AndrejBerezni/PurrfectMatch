import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCatsList from '../api/getCatsList'
import { ICat } from '../compiler/interfaces'
import { setFullList, resetFilters } from '../store/search'

export default function useCatList() {
  const dispatch = useDispatch()
  const [cats, setCats] = useState<ICat[]>([])

  useEffect(() => {
    const createCatsList = async () => {
      const catsList = await getCatsList()
      setCats(catsList)
      dispatch(setFullList(catsList))
      dispatch(resetFilters())
    }
    createCatsList()
  }, [dispatch])

  return cats
}
