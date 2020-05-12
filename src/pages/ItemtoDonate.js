import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

//this page looks at shopping list for each user 
function ItemtoDonate(props) {


    const [items, setItems] = useState(["orange", "apples", "candy"]);


    // const handleSubmit = (event) => {
    //     props
    // }

    const handleInputOnClick = (event) => {
        console.log(event.target.value)
    }

    const handleIconOnClick = (event) => {
        console.log(event.target.value)
    }

    const handleTickOnClick = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <div>
                <h1>Item to Donate</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-6"> <input className="col-12 col-md-4" className="form-control" type="text" placeholder="Donate Items" aria-label="Search" onChange={handleInputOnClick} /></div>
                    <div className="col-2 col-md-6" > <Button className="btn btn-success" variant="success" type="submit">+</Button></div>
                </div>
            </div>

            {items.map(item => {
                return (

                    <div className="container">
                        <div className="row">
                            <div className="col-1">
                                <FiTrash onClick={handleIconOnClick} />
                            </div>
                            <div className="col-10">
                                <Card style={{ width: '23rem' }}>
                                    <Card.Body className="cardColor">
                                        <Card.Text>{item}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-1">
                                <AiOutlineCheck onClick={handleTickOnClick} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemtoDonate;

