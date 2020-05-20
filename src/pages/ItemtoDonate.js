import React, { useState, useEffect } from "react";
import './ItemtoDonate.css';
import { Button, Card } from "react-bootstrap";
import { FiTrash } from "react-icons/fi";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import axios from "axios";
// import Popup from "reactjs-popup";

//this page looks at shopping list for each user 
function ItemtoDonate() {


    const [items, setItems] = useState([
        {
            ID: 0,
            text: "Milk (UHT)",
            sum: 1
        },
        {
            ID: 1,
            text: "Tinned Tomatoes",
            sum: 1
        },
        {
            ID: 2,
            text: "Tinned Tuna",
            sum: 1,
        },
        {
            ID: 3,
            text: "Tinned Meat Meals",
            sum: 1,
        }
    ]);

    const UserID = 6
    useEffect(() => {
        // fetch food items from backend
        axios
          .get(`https://f999w3tddd.execute-api.eu-west-1.amazonaws.com/dev/basket/${UserID}`)
          .then((response) => {
            setItems(response.data);
          })
          .catch((err) => {});
      }, []);
    


    const [itemsText, setItemText] = useState('');

    const handleInputOnClick = (event) => {
        setItemText(event.target.value)
    };

    const addItemsOnClick = (data) => {
        if (itemsText === "") {
            alert("Please enter an item");
        } else {
            const addNewItem = { text: data, ID: 4 }
            const newItems = [...items, addNewItem]
            setItems(newItems)
        }
    }

    const handleDeleteOnClick = (data) => {
        const filteredItem = items.filter(item => {
            return item.ID !== data;
        })
        setItems(filteredItem);
    };

    const [show, setShow] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleClose = () => {
        setShow(false)
        handleDeleteOnClick(selectedId)
    };
    const handleShow = (id) =>{
        console.log(id)
        setShow(true)
        setSelectedId(id);
    };

    return (
        <div>
            <div>
                <h1>Items to Donate</h1>
            </div>
            <div className="container" style={{ paddingBottom: 20, paddingTop: 15 }}>
                <div className="row align-items">
                    <div className="col-10"> <input className="form-control" type="text" placeholder="Add an item to your list" aria-label="Search" value={itemsText} onChange={handleInputOnClick} /></div>
                    <div className="col-2" style={{ paddingLeft: 19 }} > <Button className="button" onClick={() => addItemsOnClick(itemsText)}>+</Button></div>
                </div>
            </div>

            {items.map(item => {
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
                                    <Card.Text>{item.text}</Card.Text>
                                </Card>
                            </div>

                            <div className="col-2">
                                <Button className="button" onClick={() => handleShow(item.ID)}>✓</Button>
                            </div>

                        </div>

                        {/* Modal for users to confirm the amount they have donated */}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>How many did you donate?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modalText">
                                Confirm the amount you have donated to the food bank. Don't forget to check your point score on your profile page afterwards!</Modal.Body>
                            <Modal.Footer>
                                <Form>
                                    <Form.Row>
                                        <div className="Col inputContainer">
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="number" placeholder="0" />
                                            </Form.Group>
                                        </div>
                                        <div className="Col">
                                            <Button className="donatedButton" onClick={handleClose}>
                                                Donated
                                            </Button>
                                        </div>
                                    </Form.Row>
                                </Form>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )
            })}
        </div>
    )
}
export default ItemtoDonate;



