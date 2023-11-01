import { useEffect, useState } from 'react'
import { Carousel, Col } from 'react-bootstrap'
import getCatsData, { randomImagesUrl } from '../../api/getCatsData'
import { ICatImage } from '../../compiler/interfaces'
import './imagecarousel.css'

export default function ImageCarousel() {
  const [images, setImages] = useState<ICatImage[]>([])

  useEffect(() => {
    const getImages = async () => {
      const newImages = await getCatsData(randomImagesUrl)
      setImages(newImages)
      console.log(newImages)
    }
    getImages()
  }, [])
  return (
    <Col
      md={6}
      className="d-flex justify-content-center justify-content-md-start ps-md-0"
    >
      <Carousel className="image-carousel">
        {images.map((image: ICatImage) => (
          <Carousel.Item key={image.id}>
            <img src={image.url} alt={image.id} className="carousel-image" />
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>
  )
}
