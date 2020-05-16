import React, { useState, useEffect } from 'react';
import { Card} from 'react-bootstrap';
import { GrFormAdd } from 'react-icons/gr';

function NeededItems() {


    const postCode = "M130LE"

    const [locations, setLocation] = useState([])

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postCode}`)
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
        <div>
            <h1>Needed Items</h1>
            <div><p>Click + to slect the item to add to your shopping list</p></div>


            {locations.map(location => {
                return (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <h5>{location.name} </h5>
                                <p>{location.distance_mi} miles</p>
                            </div>
                            <div className="col-6">
                                <form >
                                    {location.needs.replace(/And/g,',').split(/[,\n/]+/).map(need => {
                                            return (
                                                <Card className="form" style={{ width: '18rem', height: '60%' }}>
                                                    {need}  
                                                   
                                                </Card>    
                                            )
                                        })}
                                         <div className="col-1" className="addFeature"> <GrFormAdd onClick={addItem} /> </div>
                                </form>    
                            </div>
                        </div>
                        <div className="col-12"> <hr /> </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NeededItems;