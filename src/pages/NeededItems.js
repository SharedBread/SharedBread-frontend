import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './NeededItems.css';
import { useAuthContext } from "../components/Auth";

function NeededItems() {


   // get users postcode
  const { authData } = useAuthContext();
  const postcode = authData.attributes["custom:postcode"];

    const [locations, setLocation] = useState([])

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postcode}`)
            .then((response) => response.json())
            .then((data) => {
                setLocation(data);
                console.log(data)
            })
    }, []);

    const addItem = (event) => {
        console.log(event.target.value)
    }

    return (
        <div style ={{marginBottom: 86}}>
            <h1>Needed Items</h1>
            <div><p>Click + to add the item to your shopping list</p></div>


            {locations.map(location => {
                return (
                    <div className="container">
                        <div className="row">
                            < div className="col-4">
                                <h5>{location.name} </h5>
                                <p>{location.distance_mi} miles</p>
                            </div>

                            <div className="col-8">
                                <form >
                                    {location.needs.replace(/And/g, ',').split(/[,\n/]+/).map(need => {
                                        return (
                                            <Card>
                                                <div className="form col d-flex justify-content-between">
                                                    <div className="need" onClick={addItem}> {need} </div>
                                                    <div className="plus"> + </div>
                                                </div>
                                            </Card>
                                        )
                                    })}
                                </form>
                            </div>
                            <div className="col"> <hr /> </div>
                        </div>
                    </div>
                )
            })}
    </div>  
    )
}

export default NeededItems;