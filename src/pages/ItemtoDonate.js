import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { GrFormAdd } from "react-icons/gr";
import { FiTrash } from "react-icons/fi";
import { RiSubtractLine } from "react-icons/ri";
import popup from "reactjs-popup";

//this page looks at shopping list for each user 
function ItemtoDonate(props) {


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
        const addNewItem = { text: data, ID: 4 }
        const newItems = [...items, addNewItem]
        setItems(newItems)
    }

    const handleDeleteOnClick = (data) => {
        const filteredItem = items.filter(item => {
            return item.ID !== data;
        })
        setItems(filteredItem);
    };


    const [count, setCounter] = useState([1, 1, 1]);
    

    const increaseBy1 = (ID) => {      
           items[ID].sum ++ 
        setCounter(items.map(i => i.sum));
    };

    const decreaseBy1 = (ID) => {
        if(items[ID].sum <= 1){
         return;
        }
        items[ID].sum --
        setCounter(items.map(i => i.sum))
    };

    const popupSection = () => {
        <popup trigger={<button>Trigger</button>}position="right center">
            <div>Popup here</div>
        </popup>
        console.log(popupSection)
    }

    return (
        <div>
            <div>
                <h1>Item to Donate</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-6"> <input className="col-12 col-md-4" className="form-control" type="text" placeholder="Donate Items" aria-label="Search" value={itemsText} onChange={handleInputOnClick} /></div>
                    <div className="col-2 col-md-6" > <Button className="btn btn-success" variant="success" type="submit" onClick={() => addItemsOnClick(itemsText)}>+</Button></div>
                </div>
            </div>

            {items.map(item => {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-1">
                                <FiTrash onClick={() => handleDeleteOnClick(item.ID)} />
                            </div>
                            <div className="col-9" className="inputColor">
                                <Card style={{ width: '16rem' }} className="cardSize">
                                    <Card.Body className="cardColor">
                                        <Card.Text>{item.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-1">
                                <GrFormAdd calssName= "addButton" onClick={() => increaseBy1(item.ID)} />
                                <p>{count[item.ID]}</p>
                                <RiSubtractLine onClick={() => decreaseBy1(item.ID)} />
                            </div>
                            <div className="col-1" >
                                
                                <Button className="btn-xl" variant="success" type="submit" >Submit</Button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default ItemtoDonate;

