import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import { Card } from 'react-bootstrap';

function Map() {

  const postCode = "M130LE"

    const [locations, setLocation] = useState([])

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postCode}`)
            .then((response) => response.json())
            .then((data) => {
                setLocation(data)
            })
    }, []);
    
    const MyMapComponent = withGoogleMap(data => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 53.483959, lng: -2.244644 }}
        >

<Marker
      position={{ lat: 53.483959, lng: -2.244644 }}
    />
            {/* {data.postcode.map(postcodes => {
                return (
                <Marker 
                key={postcodes}
                position={{ lat: 53.483959.coordinates[1], lng: -2.244644.coordinates[0] }}/>
                )
            })} */}
        </GoogleMap>
    ));

  
    return (
        <div>
            <h1>Your Local Food Banks</h1>
            <div style={{width: "50vw", height: "50vh"}}>

                <MyMapComponent 
                    containerElement={<div style={{ height: `500px`, width: `500px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}



                />
                {locations.map(location => {
                    return (
                        <Card>
                            <Card.Body>
                                <Card.Title>  <h4>{location.name} </h4></Card.Title>
                                <Card.Text>  {location.address}</Card.Text>
                                <Card.Text>  {location.postcode}</Card.Text>
                                <Card.Text>  {location.phone}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}
export default Map;