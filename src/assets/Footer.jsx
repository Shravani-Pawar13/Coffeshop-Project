import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div>
        <Container fluid className='bg-dark mt-3 text-white p-5 footer'>
            <Row>
                <Col>
                <h3 className='fw-bold'>About</h3>
                <p className='mt-3'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>

                </Col>


                <Col>
                <h3 className='fw-bold'>Menu</h3>
                <ul className='list-unstyled mt-3'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
    
                </ul>

                </Col>

                <Col>
                <h3 className='fw-bold'>Useful Links</h3>
                <ul className='list-unstyled mt-3'>
                    <li>Adipiscing</li>
                    <li>Elit, sed do</li>
                    <li>Eiusmod</li>
                    <li>Tempor</li>
                    <li>incididunt</li>
    
                </ul>


                </Col>


                <Col>
                <h3 className='fw-bold'>Contact</h3>
                <ul className='list-unstyled mt-3'>
                    <li><a href='#'><FaLocationDot className='me-2'/>Address:Loram ipsum</a></li>
                    <li><a href='#'><IoCall className='me-2'/>Call:+01 1234567890</a></li>
                    <li><a href='#'><IoMail className='me-2' />Email: mail@domain.com</a></li>
                 
    
                </ul>

                </Col>
            </Row>


        </Container>
    </div>
  )
}

export default Footer