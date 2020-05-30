import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import { Card } from "react-bootstrap";
import Geocode from "react-geocode";
import Attribution from "../components/Attribution";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

function Map() {
  const postCode = "PR253NX";

  const [locations, setLocation] = useState([]);

  const [map, setMap] = useState([]);
  
  const postcodeToLatLong = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      Geocode.fromAddress(arr[i].postcode).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          newArr.push({ lat: lat, lng: lng });
          setMap(newArr);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postCode}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
        postcodeToLatLong(data);
      });
  }, []);

  const MyMapComponent = withScriptjs(
    withGoogleMap((data) => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 53.483959, lng: -2.244644 }}
      >
        {map.map((i) => {
          return <Marker position={{ lat: i.lat, lng: i.lng }} />;
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
                <Card.Text>
                  {" "}
                  <a href={`tel:${location.phone}`}>Call: {location.phone}</a>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <Attribution />
    </div>
  );
}
export default Map;
