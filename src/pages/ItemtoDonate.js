import React from "react";
import { Button, Card } from "react-bootstrap";

//this page looks at shopping list for each user 
function ItemtoDonate() {




    return (
        <div>
            <div>
                <h1>Item to Donate</h1>
            </div>
            <div className="row-12">
                <div className="col-12 col-md-4">
                    <div> <input className="form-control" type="text" placeholder="Donate Items" aria-label="Search" /></div>
                    <div> <Button className="btn btn-success" variant="success" type="submit">+</Button></div>
                </div>
            </div>
        </div>
    )
}

export default ItemtoDonate

