import React, { useState } from "react";
import './ItemtoDonate.css';
import { Button, Card } from "react-bootstrap";
import { FiTrash } from "react-icons/fi";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
// import Popup from "reactjs-popup";

//this page looks at shopping list for each user 
function ItemtoDonate() {


    const [items, setItems] = useState([
        {
            ID: 0,
            text: "orange",
            sum: 1
        },
        {
            ID: 1,
            text: "apples",
            sum: 1
        },
        {
            ID: 2,
            text: "candy",
            sum: 1,
        }
    ]);


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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <div className="container">
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
                                <Button className="button" onClick={handleShow}>✓</Button>
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

{/* <div className="col-1">
    <GrFormAdd className="addButton" onClick={() => increaseBy1(item.ID)} />
    <p>{count[item.ID]}</p>
    <RiSubtractLine className="substractButton"  onClick={() => decreaseBy1(item.ID)} />
</div> */}

{/* <Popup trigger={<Button className="btn-sm" variant="success" type="submit" >✔</Button>} modal>
                                    {close => ( 
                                        
                                        <div className="modal">
                                            <a className="close" onClick={close}>
                                                &times;
                                                </a>
                                            <div className="header"> Model Title</div>
                                            <div className="content">
                                                {" "}
                        Have you donated this item?
                                        </div>
                                            <div className="actions">
                                                <Popup trigger={<Button className="button"> Yes </Button>}
                                                    position="top center"
                                                    closeOnDocumentClick>
                                                    <span>Thank you for donating! <br/>
                                                              Check you profile page to check your points.</span>

                                                </Popup>

                                                <Button
                                                    className="button"
                                                    onClick={() => {
                                                        console.log("modal closed ");
                                                        close();
                                                    }}
                                                >
                                                    No
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </Popup> */}


