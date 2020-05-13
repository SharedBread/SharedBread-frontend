import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

//this page looks at shopping list for each user 
function ItemtoDonate(props) {


    const [items, setItems] = useState([
        {
            ID: 1,
            text: "orange"
        },
        {
            ID: 2,
            text: "apples"
        },
        {
            ID: 3,
            text: "candy"
        }
    ]);


 

    const handleInputOnClick = (event) => {
        console.log(event.target.value)
    }

    const handleDeleteOnClick = (data) => {
      const filteredItem=items.filter(item=>{
          return item.ID !== data;
      })
      setItems(filteredItem);
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
                                <FiTrash onClick={() => handleDeleteOnClick (item.ID)} />
                            </div>
                            <div className="col-10" className="inputColor">
                                <Card style={{ width: '16rem' }}>
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

