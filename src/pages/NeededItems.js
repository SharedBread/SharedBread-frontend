import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './NeededItems.css';

function NeededItems() {


    const postCode = "M130LE"

    const [locations, setLocation] = useState([])

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postCode}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setLocation(data);
                // needItems(data);
                
            })
    }, []);

    // const needItems = (data) => {
    //     //access object from nested array
    //     //display each item separately 
    //     //remove unwanted characters 
    //     //pass it into the return section as separate items 
    //     console.log(data)
    // }

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
                            <div className="col-5">
                                <Card className="cardColor">
                                    <Card.Body className="neededCardColor">
                                        <p>{location.name} </p>
                                        <h5>{location.distance_mi} miles</h5>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-5">
                                <form>
                                    <Card className="form">
                                        {location.needs} 
                                    </Card>
                                </form>
                            </div>
                            <div className="col-2" className="addFeature"> + </div>
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