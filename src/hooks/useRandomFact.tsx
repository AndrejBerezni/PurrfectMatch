import { useState, useEffect } from 'react'
import getRandomFact from '../api/getRandomFact'

export default function useRandomFact() {
  const [randomFact, setRandomFact] = useState<string>('')

  useEffect(() => {
    const fetchRandomFact = async () => {
      const fact = await getRandomFact()
      setRandomFact(fact)
    }
    fetchRandomFact()
    const fetchInterval = setInterval(fetchRandomFact, 5000) // Fetch and display random fact every 5 seconds
    // Clear the interval when the component unmounts
    return () => clearInterval(fetchInterval)
  }, [])

  return randomFact
}
