import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function NeededItems() {


    const postCode = "M130LE"

    const [locations, setLocation] = useState([])

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postCode}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setLocation(data)
            })
    }, []);


    return (
        <div>
            <h1>Needed Items</h1>
            <div><p>Click + to slect the amount to add to your shopping list</p></div>

            <div className="container">
                {locations.map(location => {
                    return (
                        <Card>
                            <Card.Body>
                                <Card.Title>  <h4>{location.name} </h4></Card.Title>
                                <Card.Text>  {location.distance_mi} miles</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}

            </div>
        </div>
    )
}

export default NeededItems;