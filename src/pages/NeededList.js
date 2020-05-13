import React,{useState, useEffect} from 'react';
import { Card} from 'react-bootstrap';

function NeededList() {


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


    return (
        <div>
            <h1>Needed Items</h1>
            <div><p>Click + to slect the amount to add to your shopping list</p></div>



            {locations.map(location => {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-5" >
                             
                                        <p>{location.name} </p>
                                        <h5>{location.distance_mi} miles</h5>

                                 
                            </div>
                            <div className="col-5">
                                <form>
                                    <Card className="form">
                                        {location.needs}
                                    </Card>
                                </form>
                            </div>
                            <div className="col-2" className="addFeature"> + </div>

                            <div className="col-12"> <hr/> </div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default NeededList;