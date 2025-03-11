import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import About from './About';
import Gallery from './Gallery';
import Services from './Services';
import Carousel from 'react-bootstrap/Carousel';
import Contact from './Contact';

function Home() {
  return (
    <div>
        <Container fluid className='p-0'>
        <div className='position-relative w-100'>
            <img src='./images/banner-bg.png' alt='img' className='w-100 img-fluid'/>
            <div className='position-absolute top-50 start-0 ps-5 translate-middle-y'>
                <h1 className='dispaly-3'>Outstanding</h1>
                <h1 className='fw-bolder text-white display-3'>Coffee Shop</h1>
                <p className='text-white w-50 fs-5 my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>

                <Button variant='dark' className='p-3 px-5 btn1'>LEARN MORE</Button>

            </div>
        </div>
        </Container>

        <About />
        <Gallery />

        <Services />

        <Container>
          <h1 className='fw-bold' style={{color:"#fd7e14"}}>Testimonial</h1>
          <p className='fs-5'>Eeven slightly believable. If you are going to use a passage of Lorem Ipsum, you need to</p>

          <Carousel className='mt-3'>
      <Carousel.Item className='border-start border-end border-dark border-2 p-3 bracket-border'>
       
        <h3 className='fw-bold' style={{color:"#fd7e14"}}>MONILA <span className='ms-4'><img src='./images/quick-icon.png' alt='icon' /></span></h3>

        <p className='fs-5'>many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the</p>


      </Carousel.Item>
      <Carousel.Item className='border-start border-end border-dark border-2 p-3 bracket-border'>
         <h3 className='fw-bold' style={{color:"#fd7e14"}}>MONILA <span className='ms-4'><img src='./images/quick-icon.png' alt='icon' /></span></h3>

        <p className='fs-5'>many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the</p>

      </Carousel.Item>
      <Carousel.Item className='border-start border-end border-dark border-2 p-3 bracket-border'>
      <h3 className=' fw-bold' style={{color:"#fd7e14"}}>MONILA <span className='ms-4'><img src='./images/quick-icon.png' alt='icon' /></span></h3>

        <p className='fs-5'>many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the</p>

      </Carousel.Item>
    </Carousel>
        </Container>


        <Contact />


    </div>
  )
}

export default Home