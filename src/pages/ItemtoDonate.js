import React from "react";
import { Button } from "react-bootstrap";

function ItemtoDonate() {
    return (
        <div>
            <div>
                <h1>Item to Donate</h1>
            </div>
            <div className="row justify-conent-round">
                <div> <input class="form-control mr-sm-12" type="search" placeholder="add" aria-label="Search" /></div>
                <div> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">+</button></div>

            </div>
        </div>
    )
}

export default ItemtoDonate

