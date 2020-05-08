import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";

function Home() {
  return (
    <>
      <h1>We will create a UK without the need for food banks</h1>
      <br />
      <h4>Your Local Food Banks</h4>

      <CardDeck>
        <Card>
          <Card.Img variant="top" src="" />
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
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Food Bank 2 </Card.Title>
            <Card.Text>
              We're located near the Morrisons in Leyland.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Phone: 01654 482 456</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <Button variant="success" block>
        Donate Food
      </Button>
      <Button variant="success" block>
        Donate Money
      </Button>
      <Button variant="success" block>
        Volunteer
      </Button>
    </>
  );
}

export default Home;
