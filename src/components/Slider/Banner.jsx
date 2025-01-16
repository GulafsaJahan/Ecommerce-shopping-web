import React from 'react';
import Img1 from '../../assets/banner1.webp';
import Img2 from '../../assets/banner2.webp';
// import Img3 from '../../assets/s3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  return (
    <div>
        <Container fluid className='p-2'>
            <Row>
                <Col>
                    <Carousel controls={true} indicators={false} className='custom-carousel'>
                        <Carousel.Item interval={1000}>
                            <img src={Img1} alt="Slider 1" className='d-block w-100 rounded' />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img src={Img2} alt="Slider 2" className='d-block w-100 rounded' />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img src={Img1} alt="Slider 3" className='d-block w-100 rounded' />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner;
