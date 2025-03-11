import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { cartState } from './Context'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Filters from './Filters';

function Gallery() {
  const {state:{products,cart},dispatch,productstate:{sort,stock,searchQuery}} =cartState()
  console.log(products)
  const transformProducts=()=>{
    let sortedproducts=products
    if(sort)
    {
      sortedproducts=sortedproducts.sort((a,b)=>
      sort==="ascending"?a.price-b.price:b.price-a.price
      )
    }
    if(!stock)
    {
      sortedproducts=sortedproducts.filter((prod)=>prod.stock)
    }
    if(searchQuery)
    {
      sortedproducts=sortedproducts.filter((prod)=>
      prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedproducts
  }
  
  return (
    <div>
      <Container className='mt-5 text-center'>
        <h1 className='fw-bold' style={{color:"orangered"}}>Our Gallery</h1>
        <p className='fs-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus id alias amet ea ad ab non, ipsum numquam officia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde numquam quia quis reiciendis molestiae! Vero!
        </p>
        <Row>
          <Col md={3} className='bg-dark text-white fs-5 p-4'>
          <Filters />
          </Col>
          <Col md={9}>
          <div class="row row-cols-1 row-cols-md-3 g-4 gal">
          {
           transformProducts().map((item,index)=>{
              return (
                <Col key={index}>
                <Card style={{ width: '20rem' }} className='border-0'>
      <img src={item.image} className='img-fluid mx-auto d-block' alt=''/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
           	 	{item.price}
        </Card.Text>
        {cart.some((c)=>c.id==item.id)? <Button variant='danger'
        onClick={()=>dispatch({
          type:"REMOVEFROMCART",
          payload:item
        })}>Remove</Button>:
        <Button variant="primary" disabled={!item.stock} onClick={()=>dispatch({
          type:"ADDTOCART",
          payload:item
        })}>{!item.stock?"Out Of Stock":"Add To Cart"}</Button>
            }
      </Card.Body>
    </Card>

                </Col>
              )
            })
          }
        </div>
        <Button variant='dark' className='p-2 mt-3 mb-5 px-5 btn1 fs-5'>See More</Button>

          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default Gallery