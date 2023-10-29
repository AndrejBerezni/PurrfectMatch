import { useState, useEffect } from 'react'
import getRandomFact from '../api/getRandomFact'

export default function useRandomFact() {
  const [randomFact, setRandomFact] = useState<string>('')

  useEffect(() => {
    const handleRandomFact = async () => {
      const fact = await getRandomFact()
      setRandomFact(fact)
    }
    handleRandomFact()
  }, [])

  return randomFact
}
