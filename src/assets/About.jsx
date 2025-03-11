import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <div>
      <Container>
        <Row className='mt-5 align-items-center'>
          <Col>
           <h1 style={{color:"orangered"}} className='fw-bolder'>ABOUT US</h1>

           <p className='py-3 fs-5'>Full cleaning and undwrstanging serviced companies and household</p>
           <p className='pb-3 fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aliquid.</p>

           <Button variant='dark' className='p-3 px-5 btn1 fs-5'>Read More</Button>

          </Col>
          <Col>
          <img src='./images/about-img.png' className='img-fluid mx-auto d-block w-100' alt='about' />
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default About