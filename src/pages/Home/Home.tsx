import { Container, Row } from 'react-bootstrap'
import HeroSection from '../../components/HeroSection/HeroSection'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import RandomFactSection from '../../components/RandomFactSection/RandomFactSection'
import FadeInAnimation from '../../components/animation/FadeInAnimation'

export default function Home() {
  return (
    <FadeInAnimation>
      <Container>
        <HeroSection />
        <Row className="justify-content-between">
          <ImageCarousel />
          <RandomFactSection />
        </Row>
      </Container>
    </FadeInAnimation>
  )
}
