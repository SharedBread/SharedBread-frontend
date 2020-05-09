import React from "react";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <h1>We will create a UK without the need for food banks</h1>
      <br />
      <h4>Your Local Food Banks</h4>

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
