import useRandomFact from '../../hooks/useRandomFact'
import { Container } from 'react-bootstrap'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function Home() {
  const randomFact = useRandomFact()
  return (
    <Container>
      <HeroSection />
      <p>{randomFact}</p>
    </Container>
  )
}
