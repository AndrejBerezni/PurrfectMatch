import { useState, useEffect } from 'react'
import { ICat } from '../compiler/interfaces'
import getCatsList from '../api/getCatsList'

export default function useCatList() {
  const [cats, setCats] = useState<ICat[]>([])

  useEffect(() => {
    const createCatsList = async () => {
      const catsList = await getCatsList()
      setCats(catsList)
    }
    console.log(cats)
    createCatsList()
  }, [])

  return cats
}
