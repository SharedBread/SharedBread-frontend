import React from "react";
import { Button } from "react-bootstrap";
import FoodBankCarousel from "../components/FoodBankCarousel";
import FoodsRequired from "../components/FoodsRequired"

function Home() {
  return (
    <>
      <h1>We will create a UK without the need for food banks<span style={{fontSize:'12px'}}> - The Trussel Trust</span></h1>
      <br />
      <h2>Your Local Food Banks</h2>
      <FoodBankCarousel />
      <FoodsRequired />
      <div style={{marginTop: 30}}>
      <Button className="button" variant="success" block>
        Donate Food
      </Button>
      <Button className="button" variant="success" block>
        Donate Money
      </Button>
      <Button className="button" variant="success" block>
        Volunteer
      </Button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Home;
