import { useState, useEffect } from 'react'

import getRandomFact from '../../api/getRandomFact'

export default function Home() {
  const [randomFact, setRandomFact] = useState<string>('')

  useEffect(() => {
    const handleRandomFact = async () => {
      const fact = await getRandomFact()
      setRandomFact(fact)
    }
    handleRandomFact()
  }, [])
  return (
    <>
      <h1>Home</h1>
      <p>{randomFact}</p>
    </>
  )
}
