import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

function NeededItems() {

    
    const postCode = "M130LE"

    const [locations, setLocation] = useState([])

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postCode}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setLocation(data);
                needItems(data);
                
            })
    }, []);

    const needItems = (data) => {
        //access object from nested array
        //display each item separately 
        //remove unwanted characters 
        //pass it into the return section as separate items 
        console.log(data)
    }

    return (
        <div>
            <h1>Needed Items</h1>
            <div><p>Click + to slect the amount to add to your shopping list</p></div>


            {locations.map(location => {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <Card className="cardColor">
                                    <Card.Body className="neededCardColor">
                                        <h5>{location.name} </h5>
                                        <p>{location.distance_mi} miles</p>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-5">
                                <form >
                                    <Card className="form">
                                        {location.needs} 
                                    </Card>
                                </form>
                            </div>
                            <div className="col-2" className="addFeature"> + </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default NeededItems;