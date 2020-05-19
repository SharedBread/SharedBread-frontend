import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import {Card } from 'react-bootstrap';
import { useAuthContext } from "../components/Auth";


function Map() {

    const MyMapComponent = withGoogleMap(props => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 55.3781, lng: -3.4360 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: 55.3781, lng: -3.4360 }} />}
        </GoogleMap>
    ));

    const [locations, setLocation] = useState([])

    // get users postcode
  const { authData } = useAuthContext();
  const postcode = authData.attributes["custom:postcode"];

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postcode}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
      });
  }, [postcode]);

    return (
        <div>
            <h1>Your Local Food Banks</h1>
            <div>
                <MyMapComponent
                    containerElement={<div style={{ height: `500px`, width: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                        {locations.map(location => {
                            return (
                                <Card>
                                    <Card.Body>
                                     <Card.Title>  <h4>{location.name} </h4></Card.Title>  
                                     <Card.Text>  {location.address}</Card.Text>  
                                     {/* <Card.Text>  {location.postcode}</Card.Text>   */}
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