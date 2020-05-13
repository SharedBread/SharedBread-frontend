import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

//this page looks at shopping list for each user 
function ItemtoDonate() {


    const [items, setItems] = useState([
        { text: "orange", ID: 1 }, { text: "apples", ID: 2 }, { text: "candy", ID: 3 }]);

    const [itemText, setItemText] = useState("");

    const handleInputOnChange = (event) => {
        setItemText(event.target.value)
    }

    const addItemOnClick = (data) => {
        const addNewItem  = {text:data, ID:4}
        const newItems = [...items, addNewItem];
        setItems(newItems);
    }
   
    

    const handleDeleteOnClick = (data) => {
        const filteredItem= items.filter(item=>{
            return item.ID !==data;
        })
        setItems(filteredItem)
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
                    <div className="col-10 col-md-6"> <input className="col-12 col-md-4" className="form-control" type="text" placeholder="Donate Items" aria-label="Search" value = {itemText} onChange={handleInputOnChange} /></div>
                    <div className="col-2 col-md-6" > <Button className="btn btn-success" variant="success" type="submit" onClick={() => addItemOnClick (itemText) }>+</Button></div>
                </div>
            </div>

            {items.map(item => {
                return (

                    <div className="container">
                        <div className="row">
                            <div className="col-1">
                                <FiTrash onClick={ () => handleDeleteOnClick (item.ID)} />  
                            </div>
                            <div className="col-10">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Body className="cardColor">
                                        <Card.Text>{item.text}</Card.Text>
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

