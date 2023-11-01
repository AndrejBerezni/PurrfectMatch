import { Container, Row } from 'react-bootstrap'
import HeroSection from '../../components/HeroSection/HeroSection'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import RandomFactSection from '../../components/RandomFactSection/RandomFactSection'

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <Row className="justify-content-between">
        <ImageCarousel />
        <RandomFactSection />
      </Row>
    </Container>
  )
}
