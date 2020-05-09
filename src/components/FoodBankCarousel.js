import React from "react";
import { Card, Carousel } from "react-bootstrap";

function FoodBankCarousel(props) {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=PR253NX"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <Carousel>
      <Carousel.Item>
        <Card>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              {props.district}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{props.phone}</small>
          </Card.Footer>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default FoodBankCarousel;
