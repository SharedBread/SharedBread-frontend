import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { GrFormAdd } from 'react-icons/gr';

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
                            <div className="col-6">
                                <h5>{location.name} </h5>
                                <p>{location.distance_mi} miles</p>
                            </div>
                            <div className="col-6">
                                <form >
                                    {location.needs.replace(/And/g,',').replace(/Very Low Stocks/g,',').split(/[,\n/]+/).map(need => {
                                            return (

                                                <Card className="form">
                                                    {need}   <div className="row" className="addFeature" style={{ color: 'white' }} > <GrFormAdd /> </div>
                                                </Card>
                                            )
                                        })}
                                </form>
                            </div>
                            {/* <Button variant="success" > + </Button> */}
                            {/* <div className="col-2" className="addFeature" > <GrFormAdd/> </div> */}
                        </div>
                        <div className="col-12"> <hr /> </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NeededItems;