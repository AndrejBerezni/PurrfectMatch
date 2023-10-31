import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCatsData, { catsListUrl } from '../api/getCatsData'
import { ICat } from '../compiler/interfaces'
import { setFullList, resetFilters } from '../store/search'

export default function useCatList() {
  const dispatch = useDispatch()
  const [cats, setCats] = useState<ICat[]>([])

  useEffect(() => {
    const createCatsList = async () => {
      const catsList = await getCatsData(catsListUrl)
      setCats(catsList)
      dispatch(setFullList(catsList))
      dispatch(resetFilters())
    }
    createCatsList()
  }, [dispatch])

  return cats
}
