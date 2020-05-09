import React from "react";
import { Card, Carousel } from "react-bootstrap";

function FoodBankCarousel () {

    return (

        <Carousel>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>Food Bank 1</Card.Title>
              <Card.Text>
                We're located in Burnley, and require tins of food.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Phone: 01774 482 456</small>
            </Card.Footer>
          </Card>
          </Carousel.Item>
        <Carousel.Item>
        <Card>
          <Card.Body>
            <Card.Title>Food Bank 2 </Card.Title>
            <Card.Text>We're located near the Morrisons in Leyland.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Phone: 01654 482 456</small>
          </Card.Footer>
        </Card>
        </Carousel.Item>
      </Carousel>
        
    )
}

export default FoodBankCarousel