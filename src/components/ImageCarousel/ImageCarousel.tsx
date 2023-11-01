import { useEffect, useState } from 'react'
import { Carousel, Col, Spinner } from 'react-bootstrap'
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
      md={5}
      className="carousel-container d-flex flex-column align-items-center ps-md-0 mt-2"
    >
      <h5 className="mt-3">Cat pictures to make your day</h5>
      <Carousel className="image-carousel">
        {images.length === 0 ? (
          <Spinner className="carousel-spinner" />
        ) : (
          images.map((image: ICatImage) => (
            <Carousel.Item key={image.id}>
              <img src={image.url} alt={image.id} className="carousel-image" />
            </Carousel.Item>
          ))
        )}
      </Carousel>
    </Col>
  )
}
