import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import '../About/About.css';

const ContactUs = () => {
  return (
    <div id="contact" className='bg-light py-5'>
        <Container>
            <div className='text-center'>
                <h2>Contact Us</h2>
                {/* <h2 style={{display: 'inline-block', borderBottom: '4px solid #596e79', paddingBottom: '10px'}}>Contact Us</h2> */}
                <p className='mt-4'>Subtitle of contact us</p>
            </div>
            <Row className='d-flex justify-content-center pt-5 mx-4'>
                <Col className='d-flex flex-column bg-white rounded p-4 mt-4 justify-content-center align-items-center custom-shadow'>
                <div className="border border-muted rounded-circle p-2 mb-3">
                    <LocationOnOutlinedIcon className='fs-2 text-muted'/>
                </div>
                    <h2 className='mb-3'>Address</h2>
                    <p>New Delhi</p>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center gap-4 mx-4' >
                <Col className='d-flex flex-column bg-white rounded p-4 mt-4 justify-content-center align-items-center custom-shadow'>
                <div className="border border-muted rounded-circle p-2 mb-3">
                <PhoneOutlinedIcon className='fs-2 text-muted'/>
                </div>
                <h2 className='mb-3'>Call Us</h2>
                <p>+91 7355779114</p>
                </Col>
                <Col className='d-flex flex-column bg-white rounded p-4 mt-4 justify-content-center align-items-center custom-shadow'>
                <div className="border border-muted rounded-circle p-2 mb-3">
                <LocalPostOfficeOutlinedIcon className='fs-2 text-muted'/>
                </div>
                    <h2 className='mb-3'>Email Us</h2>
                    <p>example@gmail.co</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactUs