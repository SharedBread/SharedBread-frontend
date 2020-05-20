import React, { useState, useEffect } from "react";
import "./ItemtoDonate.css";
import { Button, Card } from "react-bootstrap";
import { FiTrash } from "react-icons/fi";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useAuthContext } from "../components/Auth";

//this page looks at shopping list for each user
function ItemtoDonate() {

  // get users info
  const { authData } = useAuthContext();
  const AuthID = authData.attributes.sub.toString();
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    // fetch food items from backend
    axios
      .get(
        `https://f999w3tddd.execute-api.eu-west-1.amazonaws.com/dev/basket/${AuthID}`
      )
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {});
  }, []);

  const [itemsText, setItemText] = useState("");

  const handleInputOnClick = (event) => {
    setItemText(event.target.value);
  };

  const addItemsOnClick = (data) => {
    if (itemsText === "") {
      alert("Please enter an item");
    } else {
      const addNewItem = { text: data, ID: 4 };
      const newItems = [...items, addNewItem];
      setItems(newItems);
    }
  };

  const handleDeleteOnClick = (data) => {

    axios
      .delete(
        `https://f999w3tddd.execute-api.eu-west-1.amazonaws.com/dev/basket/${data}`
      )
      .then((response) => {
        const filteredItem = items.filter((item) => {
          return item.ID !== data;
        });
        setItems(filteredItem);
      })
      .catch((err) => {
        console.log("API error", err);
      });
  };

  // donation amount
  const handleAmountOnChange = (event) => {
    setAmount(event.target.value);
  };


  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [amount, setAmount] = useState(0);
  const [foodItem, setFoodItem] = useState(null);

  // get todays date
  const today = new Date();
  const date =
    new Date().getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate();

  // function closed modal and submits data to DB  
  const handleClose = () => {
    setShow(false);
    axios
      .post(
        "https://f999w3tddd.execute-api.eu-west-1.amazonaws.com/dev/basket",
        {
          ID: selectedId,
          FoodItem: foodItem,
          Date: date,
          Amount: amount,
          AuthID: AuthID,
        }
      )
      .then((response) => {
        handleDeleteOnClick(selectedId);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  const handleShow = (id, item) => {
    console.log(id);
    setShow(true);
    setSelectedId(id);
    setFoodItem(item);
  };

  return (
    <div>
      <div>
        <h1>Items to Donate</h1>
      </div>
      <div className="container" style={{ paddingBottom: 20, paddingTop: 15 }}>
        <div className="row align-items">
          <div className="col-10">
            {" "}
            <input
              className="form-control"
              type="text"
              placeholder="Add an item to your list"
              aria-label="Search"
              value={itemsText}
              onChange={handleInputOnClick}
            />
          </div>
          <div className="col-2" style={{ paddingLeft: 19 }}>
            {" "}
            <Button
              className="button"
              onClick={() => addItemsOnClick(itemsText)}
            >
              +
            </Button>
          </div>
        </div>
      </div>

      {items.map((item) => {
        return (
          <div className="container" key={item.ID}>
            <div className="row align-items">
              <div className="col-2">
                <Button className="button">
                  <FiTrash onClick={() => handleDeleteOnClick(item.ID)} />
                </Button>
              </div>

              <div className="col-8" style={{ paddingBottom: 10 }}>
                <Card className="new-card">
                  <Card.Text>{item.FoodItem}</Card.Text>
                </Card>
              </div>

              <div className="col-2">
                <Button
                  className="button"
                  onClick={() => handleShow(item.ID, item.FoodItem)}
                >
                  ✓
                </Button>
              </div>
            </div>

            {/* Modal for users to confirm the amount they have donated */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>How many did you donate?</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modalText">
                Confirm the amount you have donated to the food bank. Don't
                forget to check your point score on your profile page
                afterwards!
              </Modal.Body>
              <Modal.Footer>
                <Form>
                  <Form.Row>
                    <div className="Col inputContainer">
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control
                          type="number"
                          placeholder="0"
                          onChange={handleAmountOnChange}
                          value={amount}
                        />
                      </Form.Group>
                    </div>
                    <div className="Col">
                      <Button className="donatedButton" onClick={handleClose}>
                        Donate
                      </Button>
                    </div>
                  </Form.Row>
                </Form>
              </Modal.Footer>
            </Modal>
          </div>
        );
      })}
    </div>
  );
}
export default ItemtoDonate;
