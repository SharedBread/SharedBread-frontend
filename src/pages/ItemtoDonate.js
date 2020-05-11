import React, { useState } from "react";
import { Button, Card, listItem } from "react-bootstrap";

//this page looks at shopping list for each user 
function ItemtoDonate() {


    const [items, setItems] = useState(["orange", "apples", "candy"]);

    return (
        <div>
            <div>
                <h1>Item to Donate</h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div> <input className="col-12 col-md-4" className="form-control" type="text" placeholder="Donate Items" aria-label="Search" /></div>
                    <div> <Button className="col-3 col-md-1" className="btn btn-success" variant="success" type="submit">+</Button></div>
                    {items.map(item => {
                        return (
                            <Card>
                                <Card.Body>
                                    {item}
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ItemtoDonate

