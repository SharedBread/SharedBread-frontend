import React, { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";

function FoodBankCarousel() {
  const [location, setLocation] = useState([{ name: "Loading..." }]);

  const postcode = "PR253NX"; // this will be dynamic - either geolocation or pc from DB.

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postcode}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLocation(data);
      });
  }, []);

  // Random images to display in Food bank header image.
  const img = {
    img1: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    img2: 'https://images.unsplash.com/photo-1517102183434-58e6be84ba50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    img3: 'https://images.unsplash.com/photo-1509457031524-987028ebc6ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
    img4: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
    img5: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    img6: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    img7: 'https://images.unsplash.com/photo-1584263347416-85a696b4eda7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    img8: 'https://images.unsplash.com/photo-1584663639452-b79f2cfecb0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    img9: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    img10: 'https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }
  
  return (
    <Carousel indicators={false}>
      {location.map((foodbank) => {
        return (
          <Carousel.Item key={`${foodbank.charity_number}`}>
            <Card>
            <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{foodbank.name}</Card.Title>
                <Card.Text>{foodbank.district}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"><a href={`tel:${foodbank.phone}`}>Call: {foodbank.phone}</a></small>
                <br />
                <small className="text-muted">Distance: {foodbank.distance_mi} Miles away</small>
              </Card.Footer>
            </Card>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default FoodBankCarousel;
