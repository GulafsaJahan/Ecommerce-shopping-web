import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import AboutImg from '../../assets/aboutus.jpg';
import Groups3Icon from '@mui/icons-material/Groups3';
import './About.css';

const About = () => {
    return (
        <section id="about" className="py-5 bg-light">
            <Container>
                <div className="text-center mb-4">
                <h2 className='mt-3'>About Us</h2>
                {/* <h2 className='mt-3' style={{display: 'inline-block', borderBottom: '4px solid #596e79', paddingBottom: '10px'}}>About Us</h2> */}
                    
                    {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr style={{ width: '140px', height: '3px', background: 'red', border: 'none' }} />
                    </div> */}
                    <div className="mt-4">Learn More about us</div>
                </div>
                <Row className="justify-content-center align-items-center pt-4">
                    <Col sm={12} md={6} className="mb-4 mb-md-0 d-flex justify-content-center">
                        <Image src={AboutImg} fluid />
                    </Col>
                    <Col sm={12} md={6} className="d-flex flex-column justify-content-center gx-5">
                        <h2 className="text-center text-md-start">Our Mission</h2>
                        <p className="text-center text-md-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas minus quidem excepturi
                            placeat velit illum sequi, commodi incidunt, consequatur inventore enim eos expedita maiores
                            quam laborum doloribus vel. Incidunt?
                        </p>
                        <p className="text-center text-md-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veritatis officiis eveniet in rem molestias
                            dolorem, a impedit ducimus placeat blanditiis alias dignissimos vitae quidem quos dolore unde dolores
                            itaque.
                        </p>
                        <p className="text-center text-md-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas minus quidem excepturi
                            placeat velit illum sequi, commodi incidunt, consequatur inventore enim eos expedita maiores
                            quam laborum doloribus vel. Incidunt?
                        </p>
                        <p className="text-center text-md-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas minus quidem excepturi
                            quam laborum doloribus vel. Incidunt?
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className='p-3 bg-light py-5 mt-5'>
                <div className="container">
                    <div className="row gy-4">
                        <div className=" p-3 col-12 col-sm-6 col-md-4 col-lg-3 bg-light">
                                <div className='d-flex justify-content-evenly p-4 rounded align-items-center shadow-transition custom-shadow'>
                                <Groups3Icon className='fs-1'/>
                                <div>
                                <span className='fs-4 py-4 mb-3'>Sales</span>
                                <h2 className='mt-3'>2000</h2>
                            </div>
                                </div>
                        </div>
                        <div className=" p-3 col-12 col-sm-6 col-md-4 col-lg-3 bg-light">
                                <div className='d-flex justify-content-evenly p-4 rounded align-items-center shadow-transition custom-shadow'>
                                <Groups3Icon className='fs-1'/>
                                <div>
                                <span className='fs-4 py-4 mb-3'>Customers</span>
                                <h2 className='mt-3'>2000</h2>
                            </div>
                                </div>
                        </div>
                        <div className=" p-3 col-12 col-sm-6 col-md-4 col-lg-3 bg-light">
                            <div className='d-flex justify-content-evenly p-4 rounded align-items-center shadow-transition custom-shadow'>
                                <Groups3Icon className='fs-1'/>
                                <div>
                                <span className='fs-4 py-4 mb-3'>Earning</span>
                                <h2 className='mt-3'>2000</h2>
                                </div>
                            </div>
                        </div>
                        <div className=" p-3 col-12 col-sm-6 col-md-4 col-lg-3 bg-light">
                                <div className='d-flex justify-content-evenly p-4 rounded align-items-center shadow-transition custom-shadow'>
                                <Groups3Icon className='fs-1'/>
                                <div>
                                <span className='fs-4 py-4 mb-3'>Sales</span>
                                <h2 className='mt-3'>2000</h2>
                                </div>
                                </div>
                        </div>                        
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default About;
