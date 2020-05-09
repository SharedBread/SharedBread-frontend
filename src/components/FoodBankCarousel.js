import React, { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";

function FoodBankCarousel() {
  const [location, setLocation] = useState([{ name: "Loading..." }]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=PR253NX"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLocation(data);
      });
  }, []);

  return (
    <Carousel>
      {location.map((foodbank) => {
        return (
          <Carousel.Item key={`${foodbank.charity_number}`}>
            <Card>
              <Card.Body>
                <Card.Title>{foodbank.name}</Card.Title>
                <Card.Text>{foodbank.district}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{foodbank.phone}</small>
              </Card.Footer>
            </Card>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default FoodBankCarousel;
