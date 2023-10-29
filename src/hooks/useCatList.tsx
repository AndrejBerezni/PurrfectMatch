import { useState, useEffect } from 'react'
import getCatsList from '../api/getCatsList'
import { ICat } from '../compiler/interfaces'

export default function useCatList() {
  const [cats, setCats] = useState<ICat[]>([])

  useEffect(() => {
    const createCatsList = async () => {
      const catsList = await getCatsList()
      setCats(catsList)
    }
    createCatsList()
  }, [])

  return cats
}
