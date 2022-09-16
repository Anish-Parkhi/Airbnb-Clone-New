import React from 'react'
import './Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './Images/img1.png'
import img2 from './Images/img2.png'
import img3 from './Images/img3.png'


function Card_View() {
  return (
    <div>
    <Card className='card__view ' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title className='card__title'> <b>Exotic Treehouse, Goa</b></Card.Title>
              <Card.Text className='card__text'>
                405 Kilometers
              </Card.Text>
              <Card.Text className='card__text'>
                4-10 Jun
              </Card.Text>
              <Card.Text className='card__rate'> <b>₹17,000/ night</b></Card.Text>
            </Card.Body>
          </Card>


    <Card className='card__view' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title className='card__title'> <b>Exotic Treehouse, Kerla</b></Card.Title>
        <Card.Text className='card__text'>
          230 Kilometers
        </Card.Text>
        <Card.Text className='card__text'>
          8-10 Jun
        </Card.Text>
        <Card.Text className='card__rate'> <b>₹25000/ night</b></Card.Text>
      </Card.Body>
    </Card>
    <Card className='card__view' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title className='card__title'> <b>Guitar House, Goa</b></Card.Title>
        <Card.Text className='card__text'>
          405 Kilometers
        </Card.Text>
        <Card.Text className='card__text'>
          4-10 Jun
        </Card.Text>
        <Card.Text className='card__rate'><b>₹8500/night</b></Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Card_View  