import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import { Card } from "react-bootstrap";
import Geocode from "react-geocode";

Geocode.setApiKey("");
Geocode.fromAddress("PR253NX").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.error(error);
  }
);

function Map() {
  const postCode = "PR253NX";

  const [locations, setLocation] = useState([]);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postCode}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
      });
  }, []);

  const MyMapComponent = withScriptjs(
    withGoogleMap((data) => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 53.483959, lng: -2.244644 }}
      >
        <Marker position={{ lat: 53.483959, lng: -2.244644 }}></Marker>

        {locations.map((location) => {
          return (
            <Marker

            // key={location.postcode}
            // position={{ lat: location.postcode, lng: location.postcode }}
            />
          );
        })}
      </GoogleMap>
    ))
  );

  return (
    <div>
      <h1>Your Local Food Banks</h1>
      <div>
        <MyMapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `500px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        {locations.map((location) => {
          return (
            <Card>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h4>{location.name} </h4>
                </Card.Title>
                <Card.Text> {location.address}</Card.Text>
                <Card.Text> <a href={`tel:${location.phone}`}>Call: {location.phone}</a></Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
export default Map;
