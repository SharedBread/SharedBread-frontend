import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import { Button, Card } from 'react-bootstrap';

function Map() {

    const MyMapComponent = withGoogleMap(props => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 55.3781, lng: -3.4360 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: 55.3781, lng: -3.4360 }} />}
        </GoogleMap>
    ));

    const postCode = "M130LE"

    const [locations, setLocation] = useState([])

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postCode}`)
            .then((response) => response.json())
            .then((data) => {
                setLocation(data)
                console.log(data)
            })
    }, []);

    const handleTextUpdate = (event) => {
        setLocation(event.target.value)
    };

    return (
        <div>
            <h1>Your Local Food Banks</h1>
            <div>
                <MyMapComponent
                    containerElement={<div style={{ height: `500px`, width: `500px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <div className="row">
                    <div className="col-12 col-md-4"> <input type="text" className="text-control" placeholder="Postcode" onChange={handleTextUpdate} />
                        {locations.map(location => {
                            return (
                                <Card>
                                    <Card.Body>
                                     <Card-Body>  <h2>{location.name} </h2></Card-Body>   
                                    </Card.Body>
    
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;