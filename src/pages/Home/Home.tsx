import useRandomFact from '../../hooks/useRandomFact'
import { Container, Row } from 'react-bootstrap'
import HeroSection from '../../components/HeroSection/HeroSection'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'

export default function Home() {
  const randomFact = useRandomFact()
  return (
    <Container>
      <HeroSection />
      <Row>
        <ImageCarousel />
        <p>{randomFact}</p>
      </Row>
    </Container>
  )
}
