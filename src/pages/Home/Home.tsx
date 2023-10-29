import useRandomFact from '../../hooks/useRandomFact'

export default function Home() {
  const randomFact = useRandomFact()
  return (
    <>
      <h1>Home</h1>
      <p>{randomFact}</p>
    </>
  )
}
